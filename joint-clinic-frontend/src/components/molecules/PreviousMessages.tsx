"use client";
import React from "react";
import Typography from "@/components/atoms/Typography";

const PreviousMessages = () => {
    return (
        <div className="w-full bg-white rounded-[30px] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-5 md:p-6 flex flex-col justify-between h-full min-h-[240px]">
            <div>
                <Typography
                    text="Previous Messages"
                    variant="bodyBold"
                    className="text-[#1E8F67] text-xl mb-6 font-bold"
                />
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <Typography text="Unread Message by Doctor" variant="bodyRegular" className="text-[#1E5598] font-medium" />
                        </div>
                        <Typography text="1d Ago" variant="bodyRegular" className="text-[#1E5598] font-medium" />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                            <Typography text="Read 5 weeks ago" variant="bodyRegular" className="text-[#1E5598] font-medium" />
                        </div>
                        <Typography text="5w Ago" variant="bodyRegular" className="text-[#1E5598] font-medium" />
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <Typography
                    text="View all Messages"
                    variant="bodyRegular"
                    className="text-[#1E5598] underline cursor-pointer"
                />
            </div>
        </div>
    );
};

export default PreviousMessages;
