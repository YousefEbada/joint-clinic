"use client";
import { useState } from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const [selected, setSelected] = useState<number | null>(2);

  return (
    <div className="bg-white p-6 rounded-[24px] shadow-[0px_20px_60px_rgba(30,85,152,0.15)] w-[360px]">
      {/* Month Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[20px] font-semibold text-[#0D294D]">
          January 2026
        </h3>
        <div className="flex gap-2">
          <button className="text-[#1e5598]">{`<`}</button>
          <button className="text-[#1e5598]">{`>`}</button>
        </div>
      </div>

      {/* Days Header */}
      <div className="grid grid-cols-7 text-center text-[#0D294D]/70 font-medium mb-2">
        {days.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-2 text-center text-[#0D294D] font-semibold">
        {Array.from({ length: 31 }).map((_, i) => {
          const day = i + 1;

          const isSelected = selected === day;

          return (
            <button
              key={i}
              onClick={() => setSelected(day)}
              className={`
                w-10 h-10 flex items-center justify-center rounded-full
                ${isSelected ? "bg-[#1e5598] text-white" : "hover:bg-[#e2ecf6]"}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
