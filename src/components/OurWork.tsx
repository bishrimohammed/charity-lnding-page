import Image from "next/image";
import React from "react";
// import vector1 from "/Vector.png";
const OurWork = () => {
  return (
    <div className=" py-[3%] flex items-center justify-center font-montserrat">
      <div className="md:w-[75%] w-full flex md:flex-row flex-col  justify-between">
        <div className="md:p-2 p-5  md:w-[43%] w-full flex flex-col gap-5">
          <h2 className="text-3xl text-[#444] font-bold font-playfair">
            How we’re making A <br /> Difference
          </h2>
          <p className="text-[#444]">
            Consectetur curabitur quis vitae aliquet nulla habitasse feugiat sed
            tellus. Vulputate ut elit sed laoreet amet phasellus pulvinar
            pretium. Nunc dictum quisque lobortis vulputate gravida imperdiet
            libero at ac.
          </p>
          <div className="flex items-center gap-2">
            <Image src="/Vector.png" width={25} height={25} alt="" />
            <p className="text-[#444]  text-sm">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused and the helpless.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/Vector1.png" width={25} height={25} alt="" />
            <p className="text-[#444]  text-sm">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused and the helpless.
            </p>
          </div>
          <p className="text-[#444]">
            {" "}
            Proin cras id semper tellus euismod aenean est a egestas. Rutrum in
            ipsum vivamus nunc dignissim sit.
          </p>
          <div>
            <button className="outline-none bg-red text-white px-6 py-2 text-sm border-none ">
              Learn More
            </button>
          </div>
          {/* <Image
        src="/image3.png"
        width={50}
        height={100}
        layout="responsive"
        alt="image3"
        className="w-full h-full"
      /> */}
        </div>
        <div className="md:w-[50%] md:h-[550px] md:p-2 p-5  w-full bg-[#D3E6FCD] relative flex">
          <div className="  w-[40%] hidden  absolute z-10 top-6 -right-10 me-1 md:flex ">
            <div className="bg-[#FCD6D3] p-2">
              <Image
                src="/image4.png"
                width={500}
                height={300}
                alt="image5"
                className="w-auto h-full"
              />
            </div>
          </div>
          <div className=" w-full    overflow-hidden flex align-bottom flex-col justify-end">
            <div className="bg-[#FCD6D3] p-2 align-bottom md:h-[80%]">
              <Image
                src="/image5.png"
                width={500}
                height={300}
                // layout="responsive"
                alt="image5"
                className="md:w-full w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
