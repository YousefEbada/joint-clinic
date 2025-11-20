"use client";
import { useState, useRef, useEffect } from "react";

type CustomSelectProps = {
  items: string[];
  onChange?: (value: string) => void;
  width?: string;   // example: "800px" | "400px" | "100%"
  height?: string;  // example: "100px" | "80px"
};

export default function CustomSelect({ items, onChange, width, height }: CustomSelectProps) {
  const [selected, setSelected] = useState(items[0]);
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange?.(value);
    setOpen(false);
  };

  const finalWidth = width ?? "800px";
  const finalHeight = height ?? "100px";

  return (
    <div
      ref={menuRef}
      style={{
        width: finalWidth,
        height: finalHeight,
      }}
      className="relative"
    >
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: finalWidth,
          height: finalHeight,
        }}
        className="
          bg-white 
          rounded-[50px]
          px-[40px]
          text-center
          text-[#1e5598]
          text-[32px]
          font-medium
          shadow-[0px_20px_60px_rgba(30,85,152,0.15)]
          outline-none
          border-none
          flex items-center justify-center
          relative
          hover:shadow-[0px_25px_75px_rgba(30,85,152,0.25)]
          transition-all duration-300
        "
      >
        {selected}

        {/* ARROW */}
        <span
          className={`
            absolute right-12 top-1/2 -translate-y-1/2
            border-solid border-t-[12px] border-l-[8px] border-r-[8px]
            border-t-[#1e5598] border-l-transparent border-r-transparent
            transition-transform duration-300
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          style={{
            width: finalWidth, // <<< IMPORTANT
          }}
          className="
            absolute left-0 top-[110%]
            bg-white
            rounded-[32px]
            shadow-[0px_15px_60px_rgba(30,85,152,0.18)]
            overflow-hidden
            z-50
          "
        >
          {items.map((item, i) => (
            <button
              key={i}
              style={{
                width: finalWidth, // <<< EACH OPTION SAME WIDTH
              }}
              onClick={() => handleSelect(item)}
              className="
                text-[28px]
                py-6
                text-[#1e5598]
                font-medium
                text-center
                hover:bg-[#eaf2ff]
                transition-all
                duration-200
                block
              "
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
