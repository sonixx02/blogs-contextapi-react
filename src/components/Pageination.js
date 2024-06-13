import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pageination = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);
  return (
    <div>
      <div className="flex gap-10 text-2xl  rounded-lg font-semibold border-4 border-zinc-900">
        {page > 1 && (
          <button onClick={() => handlePageChange(page - 1)}>Previous</button>
        )}
        {page < totalPages && (
          <button onClick={() => handlePageChange(page + 1)}>Next</button>
        )}
        <p className="ml-[70rem] text-white font-semibold text-2xl">
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pageination;
