// navar main component
"use client";

//import section
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

//importing icons
import { HiMenuAlt2 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { navLinks } from "./NavLinksList";

//importing function from utils
import { splitWordsIntoPaths } from "./utils";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import NavLi from "./NavLi";
import SocialIcon from "./SocialIcon";
import { socialIcons } from "./SocialIconsList";
import { FaDiagramProject } from "react-icons/fa6";
import { useGlobalContext } from "@/app/GlobalContext";
import GithubLoginButton from "@/components/Pages/Login/GithubLoginButton";

// main function
export default function Navbar() {
  //todo add explore button , categories and buttonl ike web dev , app dev etc
  // variables
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathName = usePathname();
  let paths = pathName.split("/");
  const { isUserLoggedIn } = useGlobalContext();
  // const { documentWidth, scrolledHeightInVh, documentHeight } =
  //   useGlobalContext();

  //close nav on click outside
  useEffect(() => {
    const closeNavOnOutsideClick = (e: any) => {
      if (!e.target.classList.contains("navToggleButton")) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener("click", closeNavOnOutsideClick);
    return () => {
      window.removeEventListener("click", closeNavOnOutsideClick);
    };
  }, []);

  //returning
  return (
    <>
      <nav className="fixed top-0 z-50 w-full min-h-[60px]  bg-white border-b dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80">
        {/* top nav  */}
        <div className="flex items-center justify-between px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-start">
            {/* nav toggle button  */}
            <button
              onClick={() => {
                setIsNavOpen(true);
              }}
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="navToggleButton inline-flex items-center text-lg text-black rounded-lg mx-2 dark:text-gray-400"
            >
              <span className="sr-only navToggleButton">Open sidebar</span>
              <HiMenuAlt2 className="w-9 h-9 navToggleButton" />
            </button>

            {/* logo  */}
            <Link href="/" className="flex ml-2 md:mr-24">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-cascadia">
                &lt;DevSync/&gt;
              </span>
            </Link>
          </div>

          {/*  path  */}
          <ol className="sm:inline-flex items-center space-x-1 md:space-x-3 hidden ">
            {paths.map((path, index) => {
              // renders a home icon and text home in all pages except homepage
              if (index == 0 && pathName !== "/") {
                return (
                  <li key={index} className="inline-flex items-center">
                    <Link
                      href="/"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      <AiFillHome className="w-4 h-4 mr-2.5" />
                      Home
                    </Link>
                  </li>
                );
              } else {
                let pathText = splitWordsIntoPaths(paths);
                return (
                  path && (
                    <li>
                      <div className="flex items-center">
                        <svg
                          className="w-3 h-3 text-gray-400 mx-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                        <Link
                          href={pathText[index]}
                          className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                        >
                          {path}
                        </Link>
                      </div>
                    </li>
                  )
                );
              }
            })}
          </ol>

          {/* right side buttons  */}

          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaDiagramProject className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search projects..."
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        {/* scrollbar */}
        {/* {documentHeight > 100 && (
          <div
            className={`w-[${Math.ceil(
              (scrolledHeightInVh / documentHeight) * 100
            )}vw] h-1 bg-red-600 transition-all shadow-md`}
            // className={`w-[10vw] h-1 bg-red-600 transition-all shadow-md`}
          />
        )} */}
      </nav>

      {/* side nav  */}
      <aside
        id="logo-sidebar"
        className={` z-50 fixed top-0 left-0 w-64 h-screen transition-transform  bg-white border-r border-gray-200 ${
          !isNavOpen ? "-translate-x-full" : "translate-x-0"
        } dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <button
          onClick={() => {
            setIsNavOpen(false);
          }}
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className=" absolute right-2 top-2 text-lg text-gray-500 rounded-lg mx-2 dark:text-gray-400"
        >
          <span className="sr-only">Open sidebar</span>
          <GrFormClose className="w-9 h-9 navToggleButton" />
        </button>
        <div className="h-full px-3 pb-4 overflow-y-auto pt-16 bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {navLinks.map((link, index) => {
              return <NavLi key={index} link={link} pathName={pathName} />;
            })}
          </ul>
        </div>
        <div className="fixed left-0 bottom-0 w-full flex justify-center items-center flex-col">
          {!isUserLoggedIn && <GithubLoginButton displayText={"Login"} />}
        </div>
      </aside>
    </>
  );
}
