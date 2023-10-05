import {
  doc,
  getFirestore,
  getDoc,
  deleteDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import app from "@/firebaseConfig";

export async function POST(req: Request) {
  const db = getFirestore(app);
  const projectData = await req
    .json()
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return Response.json({ status: 404, error: e });
    });
  try {
    const docRef = await addDoc(collection(db, "projects"), projectData);
    return Response.json({ status: 200, projectId: docRef.id });
  } catch (e) {
    return Response.json({ status: 404, error: e });
  }
}

export async function GET(req: Request) {
  const db = getFirestore(app);
  const projectId = req.headers.get("projectId");
  const notParsedfilter = req.headers.get("filter");
  const limit = req.headers.get("limit");
  const page = req.headers.get("page");
  let returnData;

  try {
    if (projectId) {
      const docRef = doc(db, "projects", projectId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return Response.json(docSnap.data());
      } else {
        return Response.json({ status: 404, error: "No such document!" });
      }
    }
    if (notParsedfilter) {
      const parsedfilter = JSON.parse(notParsedfilter);
      const projectsRef = collection(db, "projects");
      const projectsQuery = await getDocs(projectsRef);
      const projects = projectsQuery.docs.map((doc) => doc.data());

      let filteredData = projects;
      if (parsedfilter.difficulty) {
        const queryDifficulty = parsedfilter.difficulty;
        filteredData = projects.filter((project) =>
          queryDifficulty.includes(project.difficulty)
        );
      }

      if (parsedfilter.status) {
        const queryStatus = parsedfilter.status;
        filteredData = projects.filter(
          (project) => project.status === queryStatus
        );
      }

      if (parsedfilter.skillsNeeded) {
        const querySkillsNeeded = parsedfilter.skillsNeeded;
        filteredData = projects.filter((project) =>
          project.skillsNeeded.some((skill: string) =>
            querySkillsNeeded.includes(skill)
          )
        );
      }

      if (parsedfilter.tags) {
        const queryTags = parsedfilter.tags;
        filteredData = projects.filter((project) =>
          project.tags.some((tag: string) => queryTags.includes(tag))
        );
      }

      if (parsedfilter.search) {
        const querySearch = parsedfilter.search.toLowerCase().split(" ");
        filteredData = projects.map((project) => {
          // Combine title, description, and metaDesc into a single string for searching
          const searchableText =
            `${project.title} ${project.description} ${project.metaDesc}`.toLowerCase();

          // Check if any word in the search query exists in the searchable text
          const matchCount = querySearch.reduce(
            (count: number, word: string) => {
              if (searchableText.includes(word)) {
                return count + 1;
              }
              return count;
            },
            0
          );

          return { ...project, matchCount };
        });

        // Sort the filtered data based on the match count in descending order
        filteredData.sort((a, b) => b.matchCount - a.matchCount);

        //filter the data if the match count is less than 0
        filteredData = filteredData.filter((project) => project.matchCount > 0);
        // Remove the matchCount property from the final result if needed
        filteredData = filteredData.map(({ matchCount, ...rest }) => rest);
      }
      if (limit) {
        return Response.json(filteredData.slice(0, Number(limit)));
      }
      if (page && limit) {
        return Response.json(
          filteredData.slice(
            Number(page) * Number(limit),
            (Number(page) + 1) * Number(limit)
          )
        );
      }

      return Response.json(filteredData);
    } else {
      const projectsRef = collection(db, "projects");
      const projectsQuery = await getDocs(projectsRef);
      const projects = projectsQuery.docs.map((doc) => doc.data());

      if (limit) {
        return Response.json(projects.slice(0, Number(limit)));
      }
      if (page && limit) {
        return Response.json(
          projects.slice(
            Number(page) * Number(limit),
            (Number(page) + 1) * Number(limit)
          )
        );
      }
      return Response.json(projects);
    }
  } catch (e) {
    return Response.json({ status: 500, error: "Eooe" });
  }
}
export async function DELETE(request: Request) {
  const db = getFirestore(app);
  const projectId: string = request.headers.get("projectId") || "";

  try {
    await deleteDoc(doc(db, "projects", projectId));
    return Response.json({ status: 200 });
  } catch (e) {
    return Response.json({ status: 400, error: e });
  }
}

export async function PATCH(request: Request) {
  try {
    const db = getFirestore(app);
    const projectId = request.headers.get("projectId") || "";
    const inputProjectData = await request
      .json()
      .then((data: any) => {
        return data;
      })
      .catch((e: any) => {
        return Response.json({ status: 404, error: e });
      });
    const docRef = doc(db, "projects", projectId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let documentData = docSnap.data();
      documentData = { ...documentData, ...inputProjectData };
      try {
        await updateDoc(docRef, documentData);
        return Response.json({ status: 200 });
      } catch (e) {
        return Response.json({ status: 400, error: e });
      }
    } else {
      return Response.json({ status: 404, error: "No such document!" });
    }
  } catch (e) {
    return Response.json({ status: 400, error: e });
  }
}
