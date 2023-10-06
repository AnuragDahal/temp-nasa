import app from "@/firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export async function POST(req: Request) {
  const db = getFirestore(app);
  const userData = await req
    .json()
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return Response.json({ status: 400, error: e });
    });
  try {
    const docRef = await addDoc(collection(db, "users"), userData);
    return Response.json({ status: 200, userId: docRef.id });
  } catch (e) {
    return Response.json({ status: 404, error: e });
  }
}

export async function GET(req: Request) {
  const db = getFirestore(app);
  const uid = req.headers.get("uid");

  try {
    if (uid) {
      const usersRef = collection(db, "users");
      const users = await getDocs(usersRef);
      const userData = users.docs.map((doc) => doc.data());

      const queryUser = userData.find((user) => user.uid === uid);
      if (queryUser) {
        return Response.json(queryUser);
      } else {
        return Response.json({ status: 404, error: "No such user!" });
      }

    }
  } catch (e) {
    return Response.json({ status: 400, error: e });
  }
}


// export async function PUT(req: Request) {
//   const db = getFirestore(app);
//   const userData = await req
//     .json()
//     .then((data) => {
//       return data;
//     })
//     .catch((e) => {
//       return Response.json({ status: 400, error: e });
//     });
//   try {
//     const docRef = await addDoc(collection(db, "users"), userData);




    
//     return Response.json({ status: 200, userId: docRef.id });
//   } catch (e) {
//     return Response.json({ status: 404, error: e });
//   }
// }