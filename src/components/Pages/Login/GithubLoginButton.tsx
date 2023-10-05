"use client";
import { useRouter } from "next/navigation";
import {
  GithubAuthProvider,
  getAuth,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { useGlobalContext } from "@/app/GlobalContext";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const GithubLoginButton = ({ displayText }) => {
  const [isloggingIn, setIsLoggingIn] = useState(false);
  const { setUserAuthDetails, setUserDetails, app, setIsUserLoggedIn } =
    useGlobalContext();
  const router = useRouter();
  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth(app); // Pass the Firebase app instance to getAuth

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        // The signed-in user info.
        const user = result.user;
        setUserAuthDetails({ ...user, githubToken: token });
        console.log(user);

        axios
          .get("http://localhost:3000/api/users", {
            headers: {
              uid: user.uid,
            },
          })
          .then((res) => {
            if (res.data.status == 404) {
              axios
                .get(`https://api.github.com/user`, {
                  headers: {
                    Authorization: `token ${token}`,
                  },
                })
                .then((githubData) => {
                  console.log(githubData);

                  axios
                    .post("http://localhost:3000/api/users", {
                      uid: user.uid,
                      name: user.displayName || "",
                      email: user.email || "",
                      photoUrl: user.photoURL || "",
                      githubToken: token,
                      bio: githubData.data.bio || "",
                      username: githubData.data.login,
                      followers: githubData.data.followers,
                      following: githubData.data.following,
                    })
                    .then((res) => {
                      setUserDetails((prev: any) => ({
                        ...prev,
                        ...{
                          uid: user.uid,
                          name: user.displayName || "",
                          email: user.email || "",
                          photoUrl: user.photoURL || "",
                          githubToken: token,
                          bio: githubData.data.bio || "",
                          username: githubData.data.login,
                          followers: githubData.data.followers,
                          following: githubData.data.following,
                        },
                      }));

                      if (!user.emailVerified) {
                        sendEmailVerification(user).then(() => {
                          toast.info(
                            "Verification email is sent to your mailbox.",
                            {
                              position: "top-right",
                              autoClose: 3000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              theme: "light",
                            }
                          );
                        });
                      }
                    })
                    .catch((err) => {
                      toast.error("Some Error Occured, Try Again!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    });
                });
            } else {
              setUserDetails((prev: any) => ({
                ...prev,
                ...res.data,
              }));
            }
            setIsLoggingIn(false);
            toast.success("Login Successful! 🔥", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
            setIsUserLoggedIn(true);
            router.push("/");
          })
          .catch((err) => {
            toast.error("Login Failed!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      })
      .catch((error) => {
        toast.error("Some Error Occured, Try Again!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <>
      <button
        className="w-[80%] mx-auto group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
      >
        <div
          onClick={() => {
            setIsLoggingIn(true);
            handleGithubLogin();
          }}
          className="relative flex items-center space-x-4 justify-center"
        >
          {isloggingIn ? (
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute left-0 w-5 text-gray-700"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                {" "}
                {displayText}
              </span>
            </>
          )}
        </div>
      </button>
    </>
  );
};
export default GithubLoginButton;
