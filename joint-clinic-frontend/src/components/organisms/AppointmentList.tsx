import React from "react";
import Typography from "@/components/atoms/Typography";
import AppointmentItem from "@/components/molecules/AppointmentItem";

interface Appointment {
    id: number;
    name: string;
    status: string;
    date: string;
    statusColor?: string;
}

interface AppointmentListProps {
    appointments: Appointment[];
}

const AppointmentList = ({ appointments }: AppointmentListProps) => {
    return (
        <section className="flex flex-col gap-6">
            <Typography
                text="Today’s appointments"
                variant="heading2"
                className="text-[#1E5598] font-bold text-2xl"
            />

            <div className="flex flex-col gap-6">
                {appointments.map((apt) => (
                    <AppointmentItem
                        key={apt.id}
                        name={apt.name}
                        status={apt.status}
                        date={apt.date}
                        statusColor={apt.statusColor}
                    />
                ))}
            </div>
        </section>
    );
};

export default AppointmentList;
