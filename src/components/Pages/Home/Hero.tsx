import Link from "next/link";
import { BiDownArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      <section className=" bg-white py-4">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="relative lg:mb-12">
              <img
                className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                alt=""
              />
              <div className="pl-12 pr-6">
                <img
                  className="relative"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"
                  alt=""
                />
              </div>
              <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                  <div className="px-3 py-4 sm:px-5 sm:py-8">
                    <div className="flex items-start">
                      <p className="text-3xl sm:text-4xl">👋</p>
                      <blockquote className="ml-5">
                        <p className="text-sm font-medium text-white sm:text-lg">
                          “I yesma programming quotes dekhanun e'
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="2xl:pl-16">
              <div>
                <h2 className="text-xl font-bold leading-tight text-black sm:text-2xl lg:text-3xl lg:leading-tight">
                  We make things easy for
                </h2>
                <h2 className="text-3xl font-bold leading-tight text-purple-700 sm:text-4xl lg:text-5xl lg:leading-tight">
                  Open Source <br /> Countribution.
                </h2>
                <p className=" text-gray-900 my-4">
                  Velit officia conse duis enim velit mollit. Exercit ation
                  veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/#how-to-contribute"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110 transition-all"
                >
                  Help
                  <BiDownArrowAlt className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/explore"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110 transition-all"
                >
                  Let&apos;s Contribute
                  <BiRightArrowAlt className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
