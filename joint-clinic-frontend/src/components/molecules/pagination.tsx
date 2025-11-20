"use client";
import React from "react";

interface PaginationProps {
  total: number;
  current: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ total, current, onChange }) => {
  return (
    <div className="flex items-center justify-center gap-3 mt-10">
      {Array.from({ length: total }).map((_, idx) => {
        const step = idx + 1;
        const isActive = step === current;

        return (
          <button
            key={idx}
            onClick={() => onChange(step)}
            className={`
              h-3 rounded-full transition-all duration-300
              ${isActive ? "bg-[#1e5598] w-6" : "bg-[#C9D9EB] w-3"}
            `}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
