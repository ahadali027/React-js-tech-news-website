import React from "react";
import { useGlobalContext } from "./Context";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  // console.log(nbPages);
  return (
    <div className="pagination-btn  mt-16">
      <button
        className="bg-black px-5 text-white font-bold text-2xl py-4"
        onClick={() => getPrevPage()}
      >
        PREV
      </button>
      <p className="px-8">
        {page + 1} of {nbPages}
      </p>
      <button
        className="bg-black px-5 text-white font-bold text-2xl py-4"
        onClick={() => getNextPage()}
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
