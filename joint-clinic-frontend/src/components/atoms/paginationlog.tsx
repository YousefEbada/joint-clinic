"use client";

import React, { useState } from "react";

interface PaginationProps {
  total: number;        // عدد النقاط
  initial?: number;     // النقطة المفعلة
  onChange?: (index: number) => void;
  className?: string;   // ← الجديد
}

export default function PaginationDots({ total, initial = 0, onChange, className = "" }: PaginationProps) {
  const [active, setActive] = useState(initial);

  const handleClick = (index: number) => {
    setActive(index);
    onChange && onChange(index);
  };

  return (
    <div className={`flex gap-[120px] items-center ${className}`}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`
            w-[30px] h-[30px] rounded-full cursor-pointer transition-all duration-300
            ${active === index 
              ? "bg-[#0a1c32] scale-110" 
              : "border border-[#0D294D] bg-transparent"
            }
          `}
        ></button>
      ))}
    </div>
  );
}
