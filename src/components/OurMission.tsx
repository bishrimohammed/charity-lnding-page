import React from "react";

const OurMission = () => {
  return (
    <>
      <div className="flex">
        <div className="w-4/6 bg-[#EAEAE8] flex flex-col items-center justify-center">
          <div className="md:w-[50%] w-[90%] text-center text-[#444] py-[20px]">
            <h4 className="text-2xl leading-snug font-bold font-playfair">
              Our Mission
            </h4>
            <div className="leading-5">
              <p className="text-[#444] text-sm mt-2 font-montserrat">
                Elementum nec posuere auctor varius. Vehicula nec faucibus orci
                eget odio tortor in pharetra ultrices. Diam varius vitae
                placerat vitae quis mauris cras senectus tempus.
              </p>
            </div>
            <div className="flex justify-center mt-2">
              <button className="text-[#EE3123]  font-semibold px-[20px]  rounded-[5px] font-montserrat">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/6 bg-[#FCD6D3] flex items-center justify-center">
          <div className="md:w-[50%] w-[90%]  text-center text-[#444] py-[20px]">
            <h4 className="text-2xl leading-8  font-bold text-[#444] font-playfair">
              Take A <br />
              Pledge!
            </h4>

            <div className="flex justify-center mt-5">
              <button className="border-[#EE3123] font-montserrat border-[1px] text-[#444] font-semibold px-[15px] py-[7px] ">
                Support Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="sm:w-4/6 w-[60%] bg-[#DFDFDF] flex flex-col items-center justify-center">
          <div className="md:w-[50%] w-[90%]  text-center text-[#444] py-[20px]">
            <h4 className="text-2xl leading-snug font-bold text-[#444] font-playfair">
              Objectives & Functions
            </h4>
            <div className="leading-5">
              <p className="text-[#444] text-sm mt-2 font-montserrat">
                Elementum nec posuere auctor varius. Vehicula nec faucibus orci
                eget odio tortor in pharetra ultrices. Diam varius vitae
                placerat vitae quis mauris cras senectus tempus.
              </p>
            </div>
            <div className="flex justify-center mt-2">
              <button className="text-[#EE3123] font-montserrat  font-semibold px-[20px] py-[10px] rounded-[5px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="sm:w-2/6 w-[40%] bg-[#FFF5F4] flex items-center justify-center">
          <div className="md:w-[50%] w-[90%]  text-center text-[#444] py-[20px]">
            <h4 className="text-2xl leading-8  font-bold text-[#444] font-playfair">
              Photos <br />& Videos
            </h4>

            <div className="flex justify-center mt-5">
              <button className="border-[#EE3123] font-montserrat border-[1px] text-[#444] font-semibold px-[15px] py-[7px] ">
                Go to Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
