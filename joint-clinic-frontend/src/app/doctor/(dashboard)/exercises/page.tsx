"use client";
import React from "react";
import Typography from "@/components/atoms/Typography";
import SessionCard from "@/components/molecules/sessionCard";
import DashBoardHeader from "@/components/molecules/DashBoardHeader";

interface Exercise {
    id: number;
    imageSrc: string;
    title: string;
    status?: string;
    minutes?: number;
}

const exercisesLibrary: Exercise[] = [
    {
        id: 1,
        imageSrc: "/sessionCard.png",
        title: "Shoulder Rehab",
        minutes: 15,
        status: "In Progress",
    },
    {
        id: 2,
        imageSrc: "/sessionCard.png",
        title: "Knee Stimulation",
        minutes: 20,
        status: "Completed",
    },
    {
        id: 3,
        imageSrc: "/sessionCard.png",
        title: "Back Strengthening",
        minutes: 30,
        status: "Pending",
    },
    {
        id: 4,
        imageSrc: "/sessionCard.png",
        title: "Leg Exercises",
        minutes: 10,
        status: "Pending",
    }
];

const ExercisesPage = () => {
    return (
        <>
            <DashBoardHeader therapyName="" nav={false} />
            <main className="w-full h-full flex flex-col gap-6 overflow-y-auto custom-scrollbar px-1">
                <div className="flex flex-col gap-1">
                    <Typography
                        text="Exercises Library"
                        variant="heading2"
                        className="text-[#1E5598] font-bold text-[32px]"
                    />
                    <Typography
                        text="Manage and assign exercises to your patients"
                        variant="bodyRegular"
                        className="text-gray-400"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pb-8">
                    {exercisesLibrary.map((exercise) => (
                        <SessionCard
                            key={exercise.id}
                            id={exercise.id}
                            imageSrc={exercise.imageSrc}
                            title={exercise.title}
                            status={exercise.status}
                            minutes={exercise.minutes}
                            className="w-full"
                        />
                    ))}
                </div>
            </main>
        </>
    );
};

export default ExercisesPage;
