"use client";
import React from "react";
import Button from "@/components/atoms/Button";
import ActionButton from "../atoms/ActionButton";

interface ExerciseAssignItemProps {
    name: string;
    injury: string;
    due: string;
    dueColor?: string;
    onAssign?: () => void;
    isRead?: boolean;
}

const ExerciseAssignItem = ({ name, injury, due, dueColor = "text-[#EE3124]", onAssign, isRead = false }: ExerciseAssignItemProps) => {
    return (
        <div className="grid grid-cols-4 items-center">
            <div className="flex items-center gap-2">
                <div
                    className={`w-1.5 h-1.5 rounded-full ${isRead ? "border border-gray-400 bg-white" : "bg-[#0D294D]"
                        }`}
                ></div>
                <span className="text-[#1E5598] text-lg font-normal">{name}</span>
            </div>
            <span className="text-[#1E5598] font-medium text-center">{injury}</span>
            <span className={`${dueColor} font-bold text-center`}>{due}</span>
            <div className="flex justify-end text-right">
                <ActionButton
                    text="Assign"
                    variant="solid"
                    onClick={onAssign}
                />
            </div>
        </div>
    );
};

export default ExerciseAssignItem;
