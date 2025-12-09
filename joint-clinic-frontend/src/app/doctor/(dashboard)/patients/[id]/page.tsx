"use client";
import React from "react";
import DashBoardHeader from "@/components/molecules/DashBoardHeader";
import Typography from "@/components/atoms/Typography";
import CorneredBoxes from "@/components/atoms/CorneredBoxes";
import Link from "next/link";
import BackTo from "@/components/molecules/BackTo";

const PatientDetailsPage = ({ params }: { params: { id: string } }) => {
    // Mock Data - in a real app, fetch based on params.id
    const patient = {
        name: "Patient Name",
        status: "Active",
        injury: "Back Injury",
        sessions: 16,
        sessionsCompleted: 5,
        treatmentLength: "8 Weeks",
        exercisesCompleted: 12,
        numExercises: 16,
        exercisesAssigned: 8,
        nextAppointment: "Monday, January 2nd 2026 at 8:00 Am",
        nextExercise: "Exercise 17",
    };

    return (
        <div className="w-full h-full flex flex-col">
            <DashBoardHeader therapyName="" nav={false}>
                {/* DashBoardHeader handles the layout and Back button */}
            </DashBoardHeader>

            <main className="w-full flex-1 flex flex-col gap-6 overflow-hidden p-1">
                {/* Header Title Row */}
                <div className="flex justify-between items-end">
                    <Typography text={patient.name} variant="heading2" className="font-bold text-3xl" gradient={true} />
                    <span className="text-[#1C9A55] font-bold text-lg">{patient.status}</span>
                </div>

                <CorneredBoxes type="shadowBox" className="w-full h-fit bg-white p-8 flex flex-col gap-8 rounded-[30px]">

                    {/* Top Section */}
                    <div className="flex flex-col w-full gap-4">
                        <div className="flex justify-between w-full items-start">
                            <div className="flex flex-col gap-1">
                                <Typography text={patient.injury} variant="subheader" className="text-[#1E5598] font-bold" />
                                <Link href={`/doctor/patients/${params.id}/personal-details`} className="underline text-[#0D294D] font-medium text-sm">View Personal Details</Link>
                            </div>
                            <div className="flex flex-col gap-2 items-end">
                                <Link href="#" className="underline text-[#1E5598] font-bold text-base">View Reports</Link>
                                <Link href="#" className="underline text-[#1E5598] font-bold text-base">Assign New Exercise</Link>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-[#CFE8EA] rounded-full h-6 overflow-hidden">
                            <div className="bg-[#94D0D6] h-full rounded-full" style={{ width: '40%' }}></div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-y-6 gap-x-12 w-full">
                        <div className="flex justify-between">
                            <Typography text="Number Of sessions:" variant="bodyBold" className="text-[#1E5598]" />
                            <Typography text={patient.sessions.toString()} variant="bodyBold" className="text-[#1C9A55]" />
                        </div>
                        <div className="flex justify-between">
                            <Typography text="Sessions completed:" variant="bodyBold" className="text-[#1E5598]" />
                            <Typography text={patient.sessionsCompleted.toString()} variant="bodyBold" className="text-[#1C9A55]" />
                        </div>

                        <div className="flex justify-between">
                            <Typography text="Treatment length:" variant="bodyBold" className="text-[#1E5598]" />
                            <Typography text={patient.treatmentLength} variant="bodyBold" className="text-[#1C9A55]" />
                        </div>
                        <div className="flex justify-between">
                            <Typography text="Exercises completed:" variant="bodyBold" className="text-[#1E5598]" />
                            <Typography text={patient.exercisesCompleted.toString()} variant="bodyBold" className="text-[#1C9A55]" />
                        </div>

                        <div className="flex justify-between">
                            <Typography text="Number Of Exercises:" variant="bodyBold" className="text-[#1E5598]" />
                            <Typography text={patient.numExercises.toString()} variant="bodyBold" className="text-[#1C9A55]" />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <Typography text="Exercises Assigned" variant="bodyBold" className="text-[#1E5598]" />
                                <Typography text="By doctor:" variant="bodyBold" className="text-[#1E5598]" />
                            </div>
                            <Typography text={patient.exercisesAssigned.toString()} variant="bodyBold" className="text-[#1C9A55]" />
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-200"></div>

                    {/* Bottom Section */}
                    <div className="flex justify-between items-start w-full text-sm md:text-base">
                        <div className="flex flex-col gap-2">
                            <Typography text="Next Patient Appointment is on:" variant="bodyRegular" className="text-[#1E5598] font-bold" />
                            <Typography text={patient.nextAppointment} variant="bodyRegular" className="text-[#1C9A55] font-bold" />
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                            <Typography text="Patient 's Next Exercise:" variant="bodyRegular" className="text-[#1E5598] font-bold" />
                            <div className="flex gap-4 items-center">
                                <Typography text={patient.nextExercise} variant="bodyRegular" className="text-[#1C9A55] font-bold" />
                                <Link href="#" className="underline text-[#1E5598] font-bold">Cancel</Link>
                            </div>
                        </div>
                    </div>

                </CorneredBoxes>
            </main>
        </div>
    );
};

export default PatientDetailsPage;
