const Userprofile = () => {
  return (
    <div className=" p-8 bg-white shadow mt-32">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[700px] mx-auto">
        {" "}
        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
          {" "}
          <div>
            {" "}
            <p className="font-bold text-gray-700 text-xl">22</p>{" "}
            <p className="text-gray-400">Projects</p>{" "}
          </div>{" "}
          <div>
            {" "}
            <p className="font-bold text-gray-700 text-xl">10</p>{" "}
            <p className="text-gray-400">OSC</p>{" "}
          </div>{" "}
          <div>
            {" "}
            <p className="font-bold text-gray-700 text-xl">89</p>{" "}
            <p className="text-gray-400">Days</p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="relative">
          {" "}
          <div className="w-48 h-48 bg-center bg-cover bg-[url('https://avatars.githubusercontent.com/u/106688422?v=4')] mx-auto rounded-full shadow-2xl shadow-slate-300 transition-all hover:shadow-purple-700 absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"></div>{" "}
        </div>{" "}
        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
          <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800  shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
            {" "}
            Github
          </button>{" "}
          <button className="text-white py-2 px-4 uppercase rounded shadow  bg-blue-400 hover:bg-blue-500 hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
            {" "}
            Edit
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="mt-20 text-center border-b pb-4">
        {" "}
        <h1 className="text-4xl font-medium text-gray-700">Your name</h1>{" "}
        <p className="font-light text-gray-600 mt-3">@username</p>{" "}
        <p className="mt-2 text-gray-500">tagline</p>{" "}
      </div>{" "}
      <div className="mt-4 flex flex-col justify-center">
        {" "}
        <p className="text-gray-600 text-center font-light lg:px-16">
          desc An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
          records all of his own music, giving it a warm, intimate feel with a
          solid groove structure. An artist of considerable range.
        </p>{" "}
        <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
          {" "}
          Show more
        </button>{" "}
      </div>
    </div>
  );
};
export default Userprofile;
