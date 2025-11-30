"use client";
import React from "react";
import Logo from "../icons/Logo";


export default function HelloCard() {
  return (
    <div>
      {/* Logo */}
      <div className="relative">
        <Logo fill="#112a4d" className="w-[150px] h-[150px] absolute top-[20px] right-[40px]" />
      </div>
      <div
        className="
          bg-[#fff] 
          rounded-[55px] 
          shadow-lg 
          w-[860px]  
          h-[750px]
          p-8 
          flex 
          flex-col 
          items-center 
          justify-center
          gap-6
        "
      >

        {/* Title */}
        <h2
          className="
            text-[120px]  
            font-bold 
            bg-gradient-to-b from-[#0D294D] to-[#1E5598]
            bg-clip-text text-transparent
            tracking-wide
            my-0
            text-center
          "
        >
          HELLO!
        </h2>

        {/* Subtitle */}
        <p
          className="
            text-center 
            bg-gradient-to-b from-[#0D294D] to-[#1E5598]
            bg-clip-text text-transparent
            tracking-wide
            text-center 
            my-0
            font-medium
            text-[20px] 
            leading-relaxed
          "
        >
          Let’s get you started. Please enter your phone number or email.
        </p>

        {/* Input */}
        <input
          type="text"
          placeholder="Email Address Or Phone number"
          className="
            w-[67%] 
            mt-2 
            px-4 
            py-3 
            border 
            rounded-[48px] 
            outline-none 
            text-gray-800 
            text-sm
            border-[1px]
            border-[#000]
            text-center
            text-[20px]
            bg-gradient-to-b from-[#0D294D] to-[#1E5598]
            bg-clip-text text-transparent
            tracking-wide
            text-center

            focus:border-[#1E5598]
    focus:ring-2 
    focus:ring-[#1E5598]/40 
    focus:ring-offset-0
    transition-all duration-300
          "
        />

        {/* Button */}
        <button
          className="
            w-[220px] 
            h-[60px]
            cursor-pointer
            py-3 
            bg-[#ea392f] 
            text-white 
            rounded-full 
            font-semibold 
            mt-4 
            hover:bg-[#d23229] 
            transition-all 
            duration-300
          "
        >
          Go
        </button>
      </div>
    </div>
  );
}
