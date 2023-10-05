"use client";
import { useGlobalContext } from "@/app/GlobalContext";
import axios from "axios";
import {
  GoogleAuthProvider,
  getAuth,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";

const GoogleLoginButton = () => {
  const router = useRouter();
  const { setUserAuthDetails, setUserDetails, app, setIsUserLoggedIn } =
    useGlobalContext();
  const [isloggingIn, setIsLoggingIn] = useState(false);

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
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
                .post("http://localhost:3000/api/users", {
                  uid: user.uid,
                  name: user.displayName || "",
                  email: user.email || "",
                  photoUrl: user.photoURL || "",
                  googleToken: token,
                })
                .then((res) => {
                  setUserDetails((prev: any) => ({
                    ...prev,
                    ...{
                      uid: user.uid,
                      name: user.displayName || "",
                      email: user.email || "",
                      photoUrl: user.photoURL || "",
                      googleToken: token,
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
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);

        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
      });
  };
  return (
    <button
      onClick={() => {
        handleGoogleLogin();
      }}
      className="w-[80%] mx-auto group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
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
          <div className="relative flex items-center space-x-4 justify-center">
            <img
              src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
              className="absolute left-0 w-5"
              alt="google logo"
            />
            <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
              Continue with Google
            </span>
          </div>
        </>
      )}
    </button>
  );
};
export default GoogleLoginButton;
