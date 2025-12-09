"use client";

import React from "react";
import Typography from "@/components/atoms/Typography";
import ExerciseAssignItem from "@/components/molecules/ExerciseAssignItem";

interface Assign {
    id: number;
    name: string;
    injury: string;
    due: string;
    dueColor?: string;
    isRead?: boolean;
}

interface ExerciseAssignListProps {
    assigns: Assign[];
}

const ExerciseAssignList = ({ assigns }: ExerciseAssignListProps) => {
    return (
        <section className="flex flex-col gap-6">
            <Typography
                text="Exercise Assigns"
                variant="heading2"
                className="text-[#1E5598] font-bold text-2xl"
            />

            <div className="flex flex-col gap-8">
                {assigns.map((assign) => (
                    <ExerciseAssignItem
                        key={assign.id}
                        name={assign.name}
                        injury={assign.injury}
                        due={assign.due}
                        dueColor={assign.dueColor}
                        isRead={assign.isRead}
                        onAssign={() => console.log(`Assigned to ${assign.name}`)}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExerciseAssignList;
