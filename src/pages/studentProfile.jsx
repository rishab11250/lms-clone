import React from "react";
import Navbar from "../components/navbar";

export default function StudentProfile() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 space-y-6">
        <div class="flex items-center justify-between gap-2">
          <div>
            <h1 class="text-2xl font-semibold text-zinc-100">Profile</h1>
            <p class="text-sm text-zinc-400">View and update your personal information</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="px-3 py-1.5 text-sm rounded-md bg-blue-600 hover:bg-blue-500 text-white">Reset Password</button>
            <button class="px-3 py-1.5 text-sm rounded-md bg-zinc-800 hover:bg-zinc-700 text-white">Edit</button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="md:col-span-1 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 flex flex-col items-center gap-3">
            <img alt="Student avatar" class="w-28 h-28 rounded-full object-cover border border-zinc-800" src="https://media.licdn.com/dms/image/v2/D4D03AQFg5uyoos6rHw/profile-displayphoto-scale_200_200/B4DZzHC.bXIAAY-/0/1772865974346?e=1776902400&amp;v=beta&amp;t=H6Rg0nEXHLfFRd3kpo3Oi3T-kJvzo9qCqhXf5pX9Lyg" />
            <div class="text-center space-y-1">
              <h2 class="text-lg font-medium text-zinc-100">RISHAB RAVIKUMAR CHANDGOTHIA</h2>
              <p class="text-sm text-zinc-400">Student</p>
              <p class="text-xs text-zinc-500">SUxCG 714 • 108713</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="px-3 py-1.5 text-sm rounded-md bg-zinc-800 hover:bg-zinc-700 text-white">Edit Profile</button>
              <button class="px-3 py-1.5 text-sm rounded-md bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-60 disabled:cursor-not-allowed">Reset Password</button>
            </div>
          </div>
          <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Enrollment Number</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Course</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Branch</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Semester</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Gender</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Alternate Email</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Alternate Phone</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Guardian</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
          </div>
        </div>
        <div class="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 space-y-4">
          <h2 class="text-lg font-medium text-zinc-100">Contact &amp; Links</h2>
          <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Mobile</span>
              <span class="block text-sm text-zinc-100 truncate" title="6838208896">6838208896</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Parent Mobile</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">University Email</span>
              <a href="mailto:rishab11250@gmail.com" target="_blank" rel="noopener noreferrer" class="block text-sm text-blue-400 hover:underline truncate" title="rishab11250@gmail.com">rishab11250@gmail.com</a>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Current Email</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Address</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Portfolio</span>
              <a href="https://portfolio-rishab-chandgothia.vercel.app/" target="_blank" rel="noopener noreferrer" class="block text-sm text-blue-400 hover:underline truncate" title="https://portfolio-rishab-chandgothia.vercel.app/">https://portfolio-rishab-chandgothia.vercel.app/</a>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Resume</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Github</span>
              <a href="https://github.com/rishab11250" target="_blank" rel="noopener noreferrer" class="block text-sm text-blue-400 hover:underline truncate" title="https://github.com/rishab11250">https://github.com/rishab11250</a>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">LinkedIn</span>
              <a href="https://www.linkedin.com/in/rishab-chandgothia-8823112a4/" target="_blank" rel="noopener noreferrer" class="block text-sm text-blue-400 hover:underline truncate" title="https://www.linkedin.com/in/rishab-chandgothia-8823112a4/">https://www.linkedin.com/in/rishab-chandgothia-8823112a4/</a>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Twitter</span>
              <a href="https://x.com/Rishab25361722" target="_blank" rel="noopener noreferrer" class="block text-sm text-blue-400 hover:underline truncate" title="https://x.com/Rishab25361722">https://x.com/Rishab25361722</a>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">YouTube</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
          </div>
        </div>
        <div class="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <h2 class="text-lg font-medium text-zinc-100 mb-3">Academics</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">University</span>
              <span class="block text-sm text-zinc-100 truncate" title="SUxCG 714">SUxCG 714</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">University UID</span>
              <span class="block text-sm text-zinc-100 truncate" title="108713">108713</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Date of Birth</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Admission Year</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Current Year</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Section</span>
              <span class="block text-sm text-zinc-500">—</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Subjects</span>
              <span class="block text-sm text-zinc-100 truncate" title="SU11, SU12, SU13, SU14, SU15, SU16, SU0208, SU0207, SU0201, SU0202, SU0203, SU0204, SU0205, SU0206, SU0209, SU0210">SU11, SU12, SU13, SU14, SU15, SU16, SU0208, SU0207, SU0201, SU0202, SU0203, SU0204, SU0205, SU0206, SU0209, SU0210</span>
            </div>
            <div class="flex flex-col gap-1 p-3 rounded-md bg-zinc-900/40 border border-zinc-800">
              <span class="text-xs uppercase tracking-wide text-zinc-400">Mentors</span>
              <span class="block text-sm text-zinc-100 truncate" title="Ankita">Ankita</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
