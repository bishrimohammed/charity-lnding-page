import Image from "next/image";
import React from "react";

const NewsEvent = () => {
  return (
    <div className="bg-[#FFF5F4] py-[3%] md:px-0 px-5 flex flex-col items-center justify-center text-[#444] font-montserrat">
      <div className="md:w-[75%] w-full h-full flex flex-col gap-4 md:text-start text-center">
        <div className="flex justify-between items-center ">
          <div className="md:w-[50%] w-full space-y-2">
            <div className=" flex items-center gap-3 md:justify-start justify-center">
              <h6 className="text-[#444] font-semibold text-xl leading-6">
                News & Evets
              </h6>
              <span
                // style={{ width: 20 }}
                className="w-[40px] h-[1px] bg-black bg-opacity-20"
              ></span>
            </div>
            <h1 className="text-3xl font-bold font-playfair">
              Read about us & <br className="md:block hidden" /> events we’ve
              organized
            </h1>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#EE3123] text-white px-[15px] py-[7px] ">
              More News
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-5  justify-between text-start">
          <div className="md:w-[50%] w-full  space-y-3">
            {" "}
            <div className="relative">
              <div className="absolute top-0 left-0 p-3 bg-[#FCD6D3]">
                <p>
                  30th <br /> July
                </p>
              </div>
              <Image
                src="/image7.png"
                width={1000}
                height={1000}
                alt=""
                className="w-[90%] h-auto"
              />
            </div>
            <div className="space-y-2">
              <p className="font-semibold">
                Volunteer loses hope, Continues to help
              </p>
              <p className="text-sm">
                Proin cras id semper tellus euismod aenean est a egestas. Rutrum
                in ipsum vivamus nunc dignissim sit...
              </p>
              <div className="">
                <button className="text-[#EE3123]  font-semibold">
                  Read This
                </button>
              </div>
            </div>
          </div>

          <button className="block md:hidden bg-[#EE3123] w-full text-white px-[15px] py-[7px] ">
            More News
          </button>

          <div className="md:w-[45%]  space-y-5 self-end">
            <div className="flex items-center gap-6 pb-4 border-b-[1px] border-[#444]">
              <div className="p-4 text-center text-sm bg-[#DFDFDF] rounded-sm">
                29 <br /> July
              </div>
              <div>
                <h3 className="font-bold mb-1">
                  Education for under priviledged
                </h3>
                <p className="text-sm leading-0">
                  {" "}
                  Proin cras id semper tellus euismod aenean est a egestas.
                  Rutrum in ipsum vivamus nunc dignissim sit...
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 pb-4 border-b-[1px] border-[#444]">
              <div className="p-4 text-center text-sm bg-[#DFDFDF] rounded-sm">
                29 <br /> July
              </div>
              <div>
                <h3 className="font-bold mb-1">
                  Education for under priviledged
                </h3>
                <p className="text-sm leading-0">
                  {" "}
                  Proin cras id semper tellus euismod aenean est a egestas.
                  Rutrum in ipsum vivamus nunc dignissim sit...
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 pb-4 border-b-[1px]  border-[#444]">
              <div className="p-4 text-center text-sm bg-[#DFDFDF] rounded-sm">
                29 <br /> July
              </div>
              <div>
                <h3 className="font-bold mb-1">
                  Education for under priviledged
                </h3>
                <p className="text-sm leading-0">
                  {" "}
                  Proin cras id semper tellus euismod aenean est a egestas.
                  Rutrum in ipsum vivamus nunc dignissim sit...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvent;
