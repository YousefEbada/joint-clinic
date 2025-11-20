"use client";
import React from "react";
import Image from "next/image";
import Logo from "../icons/Logo";
import "./footer.css";

const Footer = () => {
  return (
    <footer
      className="
      w-[92%] 
      mx-auto 
      bg-[#0D294D] 
      text-white 
      pt-16 pb-14 
      h-[700px]
      rounded-t-[40px] 
      mt-20
      overflow-hidden
      relative
    "
    >
      <div className="px-10">
        {/* TOP SECTION */}
        <div className="w-full flex flex-col gap-12 mx-[100px]">
          {/* LOGO */}
          <Logo fill="white" className="w-[300px] h-[120px]" />

          {/* LINKS GRID */}
          <div
            className="
            grid 
            grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
            gap-x-12 gap-y-32
            text-[18px]
            mt-[60px]
          "
          >
            <ul className="space-y-[50px]">
              <li className="text-[#F6574D] lnk">Who We Are</li>
              <li className="text-[#F6574D] lnk">Why Choose Us</li>
              <li className="text-[#F6574D] lnk">How It Works</li>
              <li className="text-[#F6574D] lnk">Testimonials</li>
            </ul>

            <ul className="space-y-[50px]">
              <li className="text-[#F6574D] lnk">Sign Up</li>
              <li className="text-[#F6574D] lnk">Login</li>
              <li className="text-[#F6574D] lnk">Book an appointment</li>
            </ul>

            <ul className="space-y-[50px]">
              <li className="text-[#F6574D] lnk">For Partners</li>
              <li className="text-[#F6574D] lnk">For Business</li>
              <li className="text-[#F6574D] lnk">Join Our Team</li>
            </ul>

            <ul className="space-y-[50px]">
              <li className="text-[#F6574D] lnk">Terms & Conditions</li>
              <li className="text-[#F6574D] lnk">Privacy Policy</li>
              <li className="text-[#F6574D] lnk">FAQs</li>
              <li className="text-[#F6574D] lnk">Contact Us</li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="w-full text-center text-[#97A3B6] absolute bottom-[40px] mt-10 text-[16px]">
          © 2025 Joint. All rights reserved.
        </div>
      </div>
      {/* <style jsx>{`
        .lnk {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #ffffff;
        }

        .lnk:before {
          content: "";
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #f6574d;
          flex-shrink: 0;
        }
      `}</style> */}
    </footer>
  );
};

export default Footer;
