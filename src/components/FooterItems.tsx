import Image from "next/image";
import React from "react";

const FooterItems = () => {
  return (
    <div className="py-[3%] flex items-center justify-center font-montserrat">
      <div className="flex md:w-[75%] w-[92%] items-center justify-between gap-16">
        <div className="md:block hidden">
          <Image src="/logo.png" width={50} height={100} alt="" />
        </div>
        <div className="flex-1 flex-wrap bg-[#FFF5F4] flex justify-between text-[#44444] p-5 gap-x-5 gap-y-3">
          <div>
            <h3 className="font-bold mb-3">Contact Information</h3>
            <p className="text-sm mb-1">RedCross Ethiopia</p>
            <p className="text-sm mb-1">Phone : +251908438435</p>
            <p className="text-sm mb-1">Email : bimo@gmail.com</p>
            <p className="text-sm mb-1">Fax : +251-4271915</p>
            <p className="text-sm mb-1">Post Box No. : 653</p>
          </div>
          <div>
            <h3 className="font-bold mb-3">Quick Links</h3>
            <p className="text-sm mb-1">About Us</p>
            <p className="text-sm mb-1">FAQ's</p>
            <p className="text-sm mb-1">What We Do</p>
            <p className="text-sm mb-1">Get Involved</p>
            <p className="text-sm mb-1">News And Events</p>
            <p className="text-sm mb-1">Contact Us</p>
          </div>
          <div>
            <h3 className="font-bold mb-3">Connect With Us</h3>
            <p className="text-sm mb-1">Youtube</p>
            <p className="text-sm mb-1">Facebook</p>
            <p className="text-sm mb-1">X</p>
            <p className="text-sm mb-1">Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterItems;
