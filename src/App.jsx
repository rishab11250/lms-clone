import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import StudentDashboard from "./pages/studentDashboard";
import StudentAttendance from "./pages/studentAttendance";
import StudentCalendar from "./pages/studentCalender";
import StudentChat from "./pages/studentChat";
import StudentSemesterAttendance from "./pages/studentSemesterAttendance";
import StudentFeedback from "./pages/studentFeedback";
import StudentWeeklyFeedback from "./pages/studentWeeklyFeedback";
import StudentApplyLeave from "./pages/studentApplyLeave";
import StudentProfile from "./pages/studentProfile";
import Logout from "./pages/logout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/student/attendance" element={<StudentAttendance />} />
      <Route path="/student/calendar" element={<StudentCalendar />} />
      <Route path="/student/chat" element={<StudentChat />} />
      <Route path="/student/semester-attendance" element={<StudentSemesterAttendance />} />
      <Route path="/student/feedback" element={<StudentFeedback />} />
      <Route path="/student/weekly-feedback" element={<StudentWeeklyFeedback />} />
      <Route path="/student/apply-leave" element={<StudentApplyLeave />} />
      <Route path="/student/profile" element={<StudentProfile />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

export default App;
