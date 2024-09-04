import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="py-[3%] flex items-center justify-center">
      <div className="w-[75%] h-full flex md:flex-row flex-col items-center justify-between space-y-2">
        <div className="p-2  md:w-[45%] w-[100%] bg-[#FCD6D3]">
          <Image
            src="/image3.png"
            width={50}
            height={100}
            layout="responsive"
            alt="image3"
            className="w-full h-full"
          />
        </div>
        <div className="md:w-[40%] w-[100%] bg-[#D3E6FCD] flex items-center">
          <div className="p-2 w-full flex flex-col gap-[20px]">
            <div className="flex items-center gap-3">
              <h6 className="text-[#444] font-semibold text-lg leading-6 font-montserrat">
                About Us
              </h6>
              <span
                // style={{ width: 20 }}
                className="w-[20px] h-[2px] bg-black bg-opacity-20"
              ></span>
            </div>
            <h3 className="font-bold text-3xl text-[#444] leading-8 font-playfair">
              Your Support is Really Powerful.​
            </h3>
            <p className="w-[90%] text-[#444] font-montserrat">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused and the helpless.
            </p>
            <div>
              {" "}
              <button className="outline-none bg-red text-white px-6 py-2 text-sm border-none font-montserrat">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
