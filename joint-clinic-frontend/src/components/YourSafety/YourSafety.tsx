import Image from "next/image";
import React from "react";
import "./YourSafety.css";

const YourSafety = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12">
      <div className="mx-auto flex flex-col md:flex-row w-[90%] gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left translate-y-[40px]">
          <h1 className="text-[#0A1C32] text-[64px] font-bold font-bold w-[40%]">
            Your Safety, Our Priority
          </h1>

          <div className="mt-6 space-y-4 w-full">
            <div className="w-full flex items-start gap-4 feature-item">
              <div className="text">
                <h2 className="text-lg text-[#fff] text-[32px] font-bold">
                  HIPAA-Compliant Platform
                </h2>
                <p className="text-[#fff] text-[20px] font-medium mt-1">
                  Full compliance with healthcare data standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/swimmer.png"
          alt="safety image"
          className="w-[40%] object-contain"
        />
      </div>
    </div>
  );
};

export default YourSafety;
