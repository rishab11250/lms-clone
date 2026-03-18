import React from "react";
import NavBar from "../components/NavBar";
export default function StudentDashboard() {
    const data = localStorage.getItem("user");
    const user = data ? JSON.parse(data) : null;

    if (!user) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                No user found
            </div>
        );
    }

    return (
        <>
            <NavBar />
        </>
    );
}