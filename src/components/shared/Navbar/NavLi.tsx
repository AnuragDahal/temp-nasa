// navli component

import Link from "next/link";
import { NavLiProps } from "./@types";
import React from "react";

const NavLi: React.FC<NavLiProps> = ({ link, pathName }) => {
  const { name, href, linkIcon, tag } = link;
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${
          pathName === href
            ? "bg-gray-100 dark:bg-gray-700"
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        } group`}
      >
        {linkIcon}
        <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
        {tag && (
          <>
            {tag.type === "text" ? (
              <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                {tag.content}
              </span>
            ) : (
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                {tag.content}
              </span>
            )}
          </>
        )}
      </Link>
    </li>
  );
};

export default NavLi;