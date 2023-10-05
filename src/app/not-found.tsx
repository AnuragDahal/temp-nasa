//Error 404 page
import { Metadata } from "next";
import Image from "next/image";
import notFoundImg from "/public/assets/img/notFoundImg.png";
export const metadata: Metadata = {
  title: "404 - Page Not Found",
};

export default function page() {
  return (
    <>
      <div className="h-[calc(100vh-60px)] w-screen bg-gray-100 flex items-center justify-center text-center md:text-start">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry! Page Not Found{" "}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <a
              href="/"
              className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
            >
              Back to Homepage
            </a>
          </div>
          <div className="max-w-lg">
            <Image src={notFoundImg} height={400} width={400} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
