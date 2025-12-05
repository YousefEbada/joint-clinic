"use client";
import React from "react";
import Typography from "@/components/atoms/Typography";
import Profile from "@/components/atoms/icons/Profile"; // Using Profile icon as placeholder for avatar

const DoctorDetails = () => {
    return (
        <div className="w-full bg-white rounded-[30px] border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-5 md:p-6">
            <Typography
                text="Doctor Details"
                variant="heading2"
                className="text-[#1E5598] font-bold text-2xl mb-6"
            />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div className="flex flex-col gap-2">
                    <Typography text="Doctor Name:" variant="bodyBold" className="text-[#1E5598] font-medium" />
                    <Typography text="Last time check by doctor on:" variant="bodyBold" className="text-[#1E5598] font-medium" />
                </div>
                <div className="flex flex-col items-end gap-1">
                    <div className="w-12 h-12 rounded-full bg-[#1E8F67] flex items-center justify-center mb-1">
                        <Profile fill="white" className="w-6 h-6" />
                    </div>
                    <Typography text="Name Here" variant="bodyBold" className="text-[#1E8F67] font-medium" />
                    <Typography text="Monday, January 2nd 2026 at 8:00 Am" variant="bodySmall" className="text-[#1E8F67] font-medium" />
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;
