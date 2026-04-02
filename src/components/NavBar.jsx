import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Settings } from "lucide-react";
import { getInitials } from "../utils/getInitials";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;

  const initials = getInitials(user?.name);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-800 bg-neutral-900/80 backdrop-blur supports-backdrop-filter:bg-neutral-900/60">
      {/* TOP BAR */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* LOGO */}
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white">
            {initials}
          </div>

          <span className="text-white font-semibold">Student</span>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-1 ml-2 z-50 relative">
            <Link
              to="/student"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/student")
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
              }`}
            >
              Dashboard
            </Link>

            <Link
              to="/student/attendance"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/student/attendance")
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
              }`}
            >
              Attendance
            </Link>

            <Link
              to="/student/calendar"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/student/calendar")
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
              }`}
            >
              Calendar
            </Link>

            <Link
              to="/student/chat"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/student/chat")
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
              }`}
            >
              Chat
            </Link>

            {/* MORE */}
            <div className="relative group z-50">
              <button className="px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white rounded flex items-center gap-1 transition-colors">
                More <ChevronDown size={16} />
              </button>

              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 mt-2 w-56 rounded-lg border border-neutral-800 bg-neutral-900 shadow-xl z-50">
                <div className="p-2 space-y-1">
                  <Link
                    to="/student/semester-attendance"
                    className="block px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white rounded transition-colors"
                  >
                    Semester Attendance
                  </Link>

                  <Link
                    to="/student/feedback"
                    className="block px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white rounded transition-colors"
                  >
                    Feedback
                  </Link>

                  <Link
                    to="/student/weekly-feedback"
                    className="block px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white rounded transition-colors"
                  >
                    Weekly Subject Feedback
                  </Link>

                  <Link
                    to="/student/apply-leave"
                    className="block px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white rounded transition-colors"
                  >
                    Apply Leave
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* SETTINGS DROPDOWN */}
          <div className="relative group hidden md:block">
            <button className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800">
              <Settings size={18} />
            </button>

            {/* DROPDOWN */}
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute right-0 mt-2 w-64 rounded-lg border border-neutral-800 bg-neutral-900 shadow-xl">
              {/* USER */}
              <div className="p-4 border-b border-neutral-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold">
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold">
                      {initials}
                    </div>
                  )}
                </div>

                <div className="text-white text-sm font-medium truncate">
                  {user?.name}
                </div>
              </div>

              {/* MENU */}
              <div className="p-2">
                <Link
                  to="/student/profile"
                  className="block w-full text-left text-sm px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800"
                >
                  View Profile
                </Link>

                <Link
                  to="/logout"
                  className="block w-full text-left text-sm px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2 rounded-md text-neutral-300 hover:bg-neutral-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-900/95 backdrop-blur px-4 sm:px-6 lg:px-8 py-3">
          <div className="max-w-7xl mx-auto flex flex-col gap-1">
            <Link
              to="/student"
              className={`px-3 py-2 rounded ${
                isActive("/student") ? "bg-neutral-800" : ""
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/student/attendance"
              className={`px-3 py-2 rounded ${
                isActive("/student/attendance") ? "bg-neutral-800" : ""
              }`}
            >
              Attendance
            </Link>
            <Link
              to="/student/calendar"
              className={`px-3 py-2 rounded ${
                isActive("/student/calendar") ? "bg-neutral-800" : ""
              }`}
            >
              Calendar
            </Link>
            <Link
              to="/student/chat"
              className={`px-3 py-2 rounded ${
                isActive("/student/chat") ? "bg-neutral-800" : ""
              }`}
            >
              Chat
            </Link>
            <Link
              to="/student/semester-attendance"
              className={`px-3 py-2 rounded ${
                isActive("/student/semester-attendance") ? "bg-neutral-800" : ""
              }`}
            >
              Semester Attendance
            </Link>

            <Link
              to="/student/feedback"
              className={`px-3 py-2 rounded ${
                isActive("/student/feedback") ? "bg-neutral-800" : ""
              }`}
            >
              Feedback
            </Link>

            <Link
              to="/student/weekly-feedback"
              className={`px-3 py-2 rounded ${
                isActive("/student/weekly-feedback") ? "bg-neutral-800" : ""
              }`}
            >
              Weekly Subject Feedback
            </Link>

            <Link
              to="/student/apply-leave"
              className={`px-3 py-2 rounded ${
                isActive("/student/apply-leave") ? "bg-neutral-800" : ""
              }`}
            >
              Apply Leave
            </Link>

            <div className="border-t border-neutral-800 my-2" />

            <Link
              to="/student/profile"
              className={`px-3 py-2 rounded ${
                isActive("/student/profile") ? "bg-neutral-800" : ""
              }`}
            >
              View Profile
            </Link>

            <Link to="/logout" className="px-3 py-2 rounded hover:bg-neutral-800">
              Logout
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
