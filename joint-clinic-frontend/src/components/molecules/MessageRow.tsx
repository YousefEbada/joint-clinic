import React from "react";
import Typography from "@/components/atoms/Typography";

interface MessageRowProps {
    name: string;
    status: string;
    statusColor: string;
    dotColor: string;
    title: string;
    context: string;
    time: string;
}

const MessageRow = ({ name, status, statusColor, dotColor, title, context, time }: MessageRowProps) => {
    return (
        <div className="grid grid-cols-12 items-center w-full gap-4 text-sm md:text-base">
            {/* Dot and Name */}
            <div className="col-span-3 flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${dotColor}`}></div>
                <Typography text={name} variant="bodyBold" className="text-[#1E5598]" />
            </div>

            {/* Status */}
            <div className="col-span-2">
                <span className={`${statusColor} font-bold`}>{status}</span>
            </div>

            {/* Title */}
            <div className="col-span-3">
                <Typography text={title} variant="bodyRegular" className="text-[#9CA3AF] font-medium" />
            </div>

            {/* Context */}
            <div className="col-span-2">
                <Typography text={context} variant="bodyBold" className="text-[#1E5598]" />
            </div>

            {/* Time */}
            <div className="col-span-2 text-right">
                <Typography text={time} variant="bodyBold" className="text-[#1E5598]" />
            </div>
        </div>
    );
};

export default MessageRow;
