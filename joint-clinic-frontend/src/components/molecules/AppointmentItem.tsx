import React from "react";
import Link from "next/link";

interface AppointmentItemProps {
    name: string;
    status: string;
    date: string;
    statusColor?: string;
}

const AppointmentItem = ({ name, status, date, statusColor = "text-[#1E5598]" }: AppointmentItemProps) => {
    return (
        <div className="grid grid-cols-4 w-full items-center">
            <span className="text-[#1E5598] font-bold text-lg">{name}</span>
            <span className={`${statusColor} font-medium text-center`}>{status}</span>
            <span className="text-[#1E5598] font-medium text-center">{date}</span>
            <div className="text-right">
                <Link
                    href="#"
                    className="text-[#1C9A55] font-bold underline decoration-2 underline-offset-4 hover:opacity-80"
                >
                    Patient Details
                </Link>
            </div>
        </div>
    );
};

export default AppointmentItem;
