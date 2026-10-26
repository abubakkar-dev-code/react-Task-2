import React from "react";

const Taste = () => {
  return (
    <div className="bg-[#111A2E] py-20">
      <div className="max-w-300 mx-auto flex justify-between text-white">
        <div>
          <h3 className="font-bold text-3xl">Taste before you buy</h3>
          <p className="mt-12 font-medium text-lg">
            Drop in for a free cup, Tuesday to Sunday, 8 am to 6 pm.
          </p>
        </div>
        <div>
          <button className="px-12 py-5 hover:text-[#E8B931] rounded-lg bg-[#E8B931] text-black hover:bg-transparent hover:ring-2 hover:ring-[#E8B931]">
            Email us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Taste;
