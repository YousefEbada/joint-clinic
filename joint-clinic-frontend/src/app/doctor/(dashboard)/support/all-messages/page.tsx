"use client";
import React, { useState } from "react";
import DashBoardHeader from "@/components/molecules/DashBoardHeader";
import Typography from "@/components/atoms/Typography";
import CorneredBoxes from "@/components/atoms/CorneredBoxes";
import ChatSidebar from "@/components/organisms/ChatSidebar";
import ChatWindow from "@/components/organisms/ChatWindow";

// Mock Data
const patients = [
    { id: 1, name: "Patient 1", time: "1d Ago", snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", active: true, status: "Unread", dotColor: "bg-[#EE3124]" },
    { id: 2, name: "Patient 2", time: "1d Ago", snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", active: false, status: "Read", dotColor: "bg-[#FDB515]" },
    { id: 3, name: "Patient 3", time: "1d Ago", snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", active: false, status: "Read", dotColor: "bg-[#1C9A55]" },
    { id: 4, name: "Patient 4", time: "1d Ago", snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", active: false, status: "Read", dotColor: "bg-[#1C9A55]" },
    { id: 5, name: "Patient 5", time: "1d Ago", snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", active: false, status: "Read", dotColor: "bg-[#FDB515]" },
];

const chatMessages = [
    { id: 1, type: "received" as const, text: "Hello Doctor" },
    { id: 2, type: "sent" as const, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi." },
    { id: 3, type: "received" as const, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris." },
];

const AllMessagesPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const [selectedPatientId, setSelectedPatientId] = useState<number | null>(null);

    // Filter patients based on search
    const filteredPatients = patients.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleSelectPatient = (id: number) => {
        setSelectedPatientId(id);
    };

    const handleBackToList = () => {
        setSelectedPatientId(null);
    }

    return (
        <div className="w-full h-full flex flex-col">
            <DashBoardHeader therapyName="" nav={true}>
                <Typography text="All Messages" variant="subheader" className="text-[#1c9a55]" />
            </DashBoardHeader>

            <main className="w-full flex-1 h-[95%] flex flex-col gap-6 p-1 overflow-hidden">
                <CorneredBoxes type="shadowBox" className="w-full h-full bg-white rounded-[30px] flex overflow-hidden relative">

                    {/* Sidebar: 
                        - Mobile: Hidden if patient selected
                        - Desktop: Always visible (w-1/3)
                    */}
                    <ChatSidebar
                        patients={filteredPatients}
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                        onSelectPatient={handleSelectPatient}
                        activePatientId={selectedPatientId}
                        className={`w-full md:w-1/3 min-w-[300px] border-r border-gray-200 transition-all duration-300 absolute md:relative bg-white z-10
                            ${selectedPatientId !== null ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}
                        `}
                    />

                    {/* Chat Window:
                        - Mobile: Visible if patient selected (slide in or just replace)
                        - Desktop: Always visible (flex-1)
                    */}
                    <ChatWindow
                        messages={chatMessages}
                        patientName={patients.find(p => p.id === selectedPatientId)?.name || "Select a Patient"}
                        messageInput={messageInput}
                        onInputChange={setMessageInput}
                        onBack={handleBackToList}
                        className={`w-full md:flex-1 absolute md:relative bg-white z-20 transition-all duration-300
                             ${selectedPatientId !== null ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
                        `}
                    />

                    {/* Desktop Empty State (Optional, but here we just show ChatWindow by default for design match or empty) 
                        For now, the logic above keeps ChatWindow visible on Desktop even if null, but maybe we want an empty state?
                        Design image shows a pre-selected chat. We can default to first patient or just show empty.
                        The logic above: 
                        - Desktop: Sidebar is static. ChatWindow is static. 
                        - Mobile: Sidebar slides out, ChatWindow slides in.
                    */}

                </CorneredBoxes>
            </main>
        </div>
    );
};

export default AllMessagesPage;
