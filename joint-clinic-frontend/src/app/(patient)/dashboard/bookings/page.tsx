import React from 'react'
import DashBoardHeader from "@/components/molecules/DashBoardHeader";
import Typography from "@/components/atoms/Typography";
import Link from 'next/link';

const BookingsPage = () => {
    return (
        <>
            <DashBoardHeader therapyName="Shoulder Therapy">
                <Link href="/dashboard/booking">
                    <Typography text="Book a Session" variant="bodyRegular" className="text-gray-400 font-medium hover:text-[#1e5598] transition-colors" />
                </Link>
                <Typography text="My Bookings" variant="bodyRegular" className="text-[#1e5598] font-medium" />
            </DashBoardHeader>
            <main className="w-full h-full flex flex-col gap-6 p-4 md:p-8 overflow-y-auto custom-scrollbar">
                <Typography text="My Bookings" variant="heading1" className="text-[#0D294D]" />
                {/* Bookings content will go here */}
            </main>
        </>
    )
}

export default BookingsPage
