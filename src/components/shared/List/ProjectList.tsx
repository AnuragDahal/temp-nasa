"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProjectCard from "../Card/ProjectCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ProjectList = () => {
  //todo add next and prev button bu paq and avoid cumulatve layout shift
  const [projects, setProjects] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const [projectPage, setProjectPage] = useState(1);
  useEffect(() => {
    axios
      .request({
        method: "get",
        url: "http://localhost:3000/api/projects",
        headers: {
          limit: "3",
          page: projectPage.toString(),
        },
      })
      .then((res) => {
        setProjects(res.data);
        setIsFetching(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsErrorOccured(true);
        setIsFetching(false);
      });
  }, [projectPage]);

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl min-h-[620px]">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Some Popular Projects:
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-3">
            {projectPage > 1 && (
              <button
                onClick={() => {
                  setProjectPage(projectPage - 1);
                  setIsFetching(true);
                }}
                type="button"
                className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white  "
              >
                <MdKeyboardArrowLeft className="w-8 h-8" />
              </button>
            )}

            <button
              onClick={() => {
                setProjectPage(projectPage + 1);
                setIsFetching(true);
              }}
              type="button"
              className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white  "
            >
              <MdKeyboardArrowRight className="w-8 h-8" />
            </button>
          </div>
        </div>

        {isFetching ? (
          <>
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
                <svg
                  fill="none"
                  className="w-6 h-6 animate-spin"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>

                <div>Loading ...</div>
              </div>
            </div>
          </>
        ) : !isFetching && isErrorOccured ? (
          <>
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex justify-center items-center space-x-1 mt-10 text-lg text-gray-700">
                <div>No projects to show..</div>
              </div>
            </div>
          </>
        ) : (
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                metaDesc={project.metaDesc}
                tech={project.tech}
                difficulty={project.difficulty}
                projectId={project.id}
                img={project.img}
                key={project.id}
              />
            ))}
          </div>
        )}
        <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
          {projectPage > 1 && (
            <button
              onClick={() => {
                setProjectPage(projectPage - 1);
                setIsFetching(true);
              }}
              type="button"
              className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white  "
            >
              <MdKeyboardArrowLeft className="w-8 h-8" />
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setProjectPage(projectPage + 1);
              setIsFetching(true);
            }}
            className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white  "
          >
            <MdKeyboardArrowRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default ProjectList;
