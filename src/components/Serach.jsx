import React from "react";
import { useGlobalContext } from "./Context";

const Serach = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <div className="flex bg-slate-500 items-center flex-col sm:flex-row sm:justify-center sm:gap-5 ">
        <p className="bg-blue-400 rounded-lg text-white h-16 text-5xl font-bold flex mt-10 sm:mt-0 items-center px-4  ">
          Ahad Ali
        </p>
        <p className="text-5xl font-bold py-10 text-white space-x-3 ">
          Tech news Website
        </p>
      </div>

      <form
        className=" flex items-center justify-center px-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <input
            className="px-6 mt-10 py-5 text-3xl"
            type="text"
            placeholder="Search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};
export default Serach;
