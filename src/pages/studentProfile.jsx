import React from "react";
import Navbar from "../components/navbar";

export default function StudentProfile() {
  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-white">View Profile</h1>
        </div>
      </main>
    </>
  );
}
