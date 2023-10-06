"use client";
import { useGlobalContext } from "@/app/GlobalContext";
import DetailsForm from "@/app/(pages)/login/detailsForm/page";
import GithubLoginButton from "@/components/Pages/Login/GithubLoginButton";
import GoogleLoginButton from "@/components/Pages/Login/GoogleLoginButton";
import { useState } from "react";

const Login = () => {
  const [isGithubLoggingIn, setIsGithubLoggingIn] = useState(false);
  const [isGoogleLoggingIn, setIsGoogleLoggingIn] = useState(false);
  const {userDetails} = useGlobalContext();
  return (
    <>
      <div className="flex relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
        <div className=" self-center relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <div className="space-y-4">
                  <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                    Welcome to DevSync:
                  </h2>
                </div>
                <div className="my-16 grid space-y-4">
                  <GoogleLoginButton
                    isloggingIn={isGoogleLoggingIn}
                    setIsLoggingIn={setIsGoogleLoggingIn}
                  />
                  <GithubLoginButton
                  isloggingIn={isGithubLoggingIn}
                  setIsLoggingIn={setIsGithubLoggingIn}
                  />
                </div>

                <div className="mt-4 space-y-4 text-gray-600 text-center sm:-mb-8">
                  <p className="text-xs">
                    By proceeding, you agree to our{" "}
                    <a href="#" className="underline">
                      Terms of Use
                    </a>{" "}
                    and confirm you have read our{" "}
                    <a href="#" className="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
