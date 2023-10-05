"use client";
import { useGlobalContext } from "@/app/GlobalContext";
import getCurrentDateString from "@/utils/getCurrentDateString";
import axios from "axios";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface projectDataType {
  owner: string;
  difficulty: string;
  contributors: string[];
  updatedDate: string;
  status: string;
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
  upvotes: number;
  savedCount: number;
  img: string;
  createdDate: string;
  description: string;
  tags: string[];
  skillsNeeded: string[];
  deadline: string;
  title: string;
  downvotes: number;
}

const page = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [imgInFirebaseUrl, setImgInFirebaseUrl] = useState("");
  const formData = {
    owner: "JohnDoe",
    difficulty: "Intermediate",
    contributors: ["JaneSmith", "BobJohnson"],
    updatedDate: "2023-10-16T12:30:00Z",
    status: "Open",
    reviews: [
      {
        user: "user456",
        rating: 4,
        comment: "Great project! Enjoyed working on it.",
      },
      {
        rating: 5,
        comment: "Excellent project with valuable insights.",
        user: "user789",
      },
    ],
    upvotes: 25,
    savedCount: 15,
    img: "",
    createdDate: "2023-10-15T08:00:00Z",
    description:
      "A research project to analyze climate change patterns and their impact on ecosystems.",
    tags: ["Climate Change", "Data Science", "Research"],
    skillsNeeded: ["Data Analysis", "Climate Science", "Python"],
    deadline: "2024-03-01T00:00:00Z",
    title: "Climate Change Analysis",
    downvotes: 3,
  };

  const { app } = useGlobalContext();
  const createProject = async () => {
    axios
      .post("http://localhost:3000/api/projects", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error:", error);
        return;
      });
  };
  interface uploadImgType {
    imgUrl: string;
  }

  const uploadImg = async () => {
    if (imgUrl) {
      const storage = getStorage(app);
      const imgRef = ref(
        storage,
        // `projects/${JSON.stringify(imgUrl)}_${getCurrentDateString()}` //todo : rename file
        `projects/${JSON.stringify(imgUrl)}_${getCurrentDateString()}` //todo : rename file
      );
      try {
        uploadBytes(imgRef, imgUrl).then((snapshot) => {
          const url = snapshot.ref.fullPath;
          console.log("Uploaded a blob or file!", url);
          setImgInFirebaseUrl(url);
        });
      } catch (e) {
        console.log(e);
        return;
      }
    }
  };

  useEffect(() => {
    formData.img = imgInFirebaseUrl;
  }, [imgInFirebaseUrl]);

  // return (
  //   <>
  //     <button
  //       onClick={() => {
  //         createProject();
  //       }}
  //       classNameName="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
  //     >
  //       Submit
  //     </button>
  //     <input
  //       type="file"
  //       name="file"
  //       onChange={(e) => {
  //         setImgUrl(e.target.files[0]);
  //       }}
  //       accept="image/*"
  //     />
  //     <label
  //       htmlFor="file"
  //       onClick={() => {
  //         uploadImg();
  //       }}
  //     >
  //       Upload
  //     </label>
  //   </>
  // );


  return (
    <>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">New Post</div>
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text"/>
          <textarea className="description bg-gray-100 sec p-3 h-55 border border-gray-300 outline-none" spellcheck="false" placeholder="Summary"></textarea>

          <textarea className="description bg-gray-100 mt-5 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Full description"></textarea>



          <div className="icons flex text-gray-500 m-2">
            <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
            <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
          </div>
          {/* button */}
          <div className="buttons flex">
            <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
            <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
          </div>
      </div>
      </>
  )
};
export default page;
