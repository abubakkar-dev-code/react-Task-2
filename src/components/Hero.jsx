import React from "react";
import heroImg from "../assets/img/img/hero.svg";

const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-300 mx-auto flex flex-col lg:flex-row items-center justify-between gap-14">
        <div className="flex-1 flex flex-col items-start max-w-xl">
          <h1 className="text-7xl font-bold text-[#111A2E] leading-[1.08] tracking-tight">
            Coffee roasted
            <br />
            this week, not
            <br />
            this quarter.
          </h1>

          <p className="mt-6 text-gray-700 text-base leading-relaxed">
            We roast in 6 kg batches and ship within two days. Every bag lists
            the farm, the roast date and how we&apos;d brew it.
          </p>

          <button className="mt-8 px-6 py-3 bg-[#E8B931] hover:bg-[#d8a92b] text-[#111A2E] text-base font-semibold border border-[#111A2E] rounded-md shadow-sm transition-all duration-150 cursor-pointer active:scale-95">
            Shop this week'roast
          </button>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-120 overflow-hidden rounded-xl shadow-sm">
            <img
              src={heroImg}
              alt="Coffee roast illustration"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
