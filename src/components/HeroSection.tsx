import React from "react";
import NavBar from "./NavBar";

const HeroSection = () => {
  return (
    <div className="h-screen bg-hero-bg-image relative">
      <NavBar />
      <div className="absolute inset-0 flex w-full items-center justify-center z-10">
        <div className="flex flex-col items-center text-center w-full max-w-xl p-4 text-white gap-[18px]">
          {" "}
          <p className="text-[18px] font-semibold leading-6 font-montserrat">
            Unite, Serve, Strengthen Together
          </p>
          <h3 className="leading-snug md:text-4xl text-[30px] font-semibold">
            Serving Humanity, Saving Lives <br /> Red Cross Society
          </h3>
          <p className="text-sm font-montserrat">
            Compassion drives us. Together, we serve, uplift, and strengthen
            communities. Join us in making a difference, one act of kindness at
            a time.
          </p>
          <button className="outline-none bg-red text-white px-6 py-2 text-sm border-none font-semibold">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
