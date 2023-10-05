"use client";

// Importing dependencies
import React, { createContext, useContext, ReactNode, useState } from "react";
import app from "@/firebaseConfig";

// Defining the type for the GlobalContextProviderProps
interface GlobalContextProviderProps {
  children: ReactNode;
}

// Defining the type for global context data
type GlobalContextType = {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userDetails: userDetailsType
  setUserDetails: React.Dispatch<React.SetStateAction<userDetailsType>>;
  userAuthDetails: any;
  setUserAuthDetails: React.Dispatch<React.SetStateAction<any>>;
  app: any;
  projectsList: {}[];
  setProjectsList: React.Dispatch<React.SetStateAction<any>>;
};

const Context = createContext<GlobalContextType | undefined>(undefined);

// Defining the type for the useGlobalContext hook
export const useGlobalContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};

interface userDetailsType {
  uid: string;
  name: string;
  email: string;
  photoUrl: string;
  githubToken: string;
  bio: string;
  username: string;
  followers: number;
  following: number;
}
// Defining the GlobalContextProvider component
export default function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState<userDetailsType>(
    {} as userDetailsType
  );
  const [userAuthDetails, setUserAuthDetails] = useState({});
  const [projectsList, setProjectsList] = useState([]);

  const globalContext: GlobalContextType = {
    isUserLoggedIn,
    setIsUserLoggedIn,
    userDetails,
    setUserDetails,
    userAuthDetails,
    setUserAuthDetails,
    app,
    projectsList,
    setProjectsList,
  };

  return <Context.Provider value={globalContext}>{children}</Context.Provider>;
}
