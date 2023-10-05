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

  return (
    <>
      <button
        onClick={() => {
          createProject();
        }}
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
      <input
        type="file"
        name="file"
        onChange={(e) => {
          setImgUrl(e.target.files[0]);
        }}
        accept="image/*"
      />
      <label
        htmlFor="file"
        onClick={() => {
          uploadImg();
        }}
      >
        Upload
      </label>
    </>
  );
};
export default page;
