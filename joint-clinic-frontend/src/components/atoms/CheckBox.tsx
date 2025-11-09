"use client";
import {useState} from "react";
import {color} from "@/lib/constants/colors";

interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
}

const Checkbox = ({ checked, onChange, label, disabled }:CheckboxProps) => {
    const [isChecked, setChecked] = useState(checked?checked:false);
    return (
        <label
            className={`flex items-center gap-2 cursor-pointer select-none ${
                disabled ? "opacity-60 cursor-not-allowed" : ""
            }`}
        >
            <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => onChange?.(e.target.checked)}
                onClick={()=>{setChecked(!isChecked)}}
                disabled={disabled}
                className="peer hidden"
            />
            <span
                className={`
          w-[19px] h-[19px] flex items-center justify-center border-2 rounded-md transition-colors
          peer-focus:ring-2 peer-focus:ring-blue-300
        `}
                style={{
                    cursor: "pointer",
                    backgroundColor: isChecked? "transparent" : color.disabled,
                    borderColor: isChecked ? color.success : color.disabled,
                }}
            >
        {isChecked && (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11 10"
                fill= "none"
                strokeLinejoin="round"
                className="w-[11px] h-[10px]"
            >
                <path d="M1 5.63167L3.43892 8.1419C3.8733 8.58898 4.60639 8.53402 4.96925 8.02717L10 1.00009" stroke="#167C4F" stroke-width="2" stroke-linecap="round"/>
            </svg>
        )}
      </span>
            {label && <span className="text-sm text-gray-800">{label}</span>}
        </label>
    );
};

export default Checkbox;
