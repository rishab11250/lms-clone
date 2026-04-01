import { useState } from "react";
import Navbar from "../components/navbar";
import { FileText, Plus, User } from "lucide-react";

export default function StudentApplyLeave() {
  const [form, setForm] = useState({
    category: "",
    fromDate: "",
    toDate: "",
    leaveTime: "",
    returnTime: "",
    remarks: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white">
      <Navbar />
      <div className="px-6 pt-5 pb-8 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Apply for Leave</h1>
          <p className="text-neutral-400">
            Submit your leave application and track your requests
          </p>
        </div>
        {/* STATS */}
        <div className="grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard title="Total Applications" value="0" />
          <StatCard title="Pending Review" value="0" color="text-amber-300" />
          <StatCard title="Approved" value="0" color="text-emerald-300" />
          <StatCard title="Rejected" value="0" color="text-red-300" />
        </div>
        {/* MAIN GRID */}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FORM */}
          <div class="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                <Plus className="w-4 h-4 text-neutral-400" />
              </div>
              <div>
                <h2 class="text-xl font-semibold">New Leave Application</h2>
                <p class="text-sm text-neutral-400">
                  Fill out the form to submit your leave request
                </p>
              </div>
            </div>
            <form class="space-y-6" onSubmit={handleSubmit}>
              {/* CATEGORY */}
              <div>
                <label class="block text-sm font-medium text-neutral-200 mb-2">
                  Leave Category
                </label>
                <select class="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors">
                  <option value="">Select category</option><option value="Personal reasons">Personal reasons</option>
                  <option value="Festival celebration">Festival celebration</option>
                  <option value="Hackathon participation">Hackathon participation</option>
                  <option value="College events (seminars, workshops, competitions, etc.)">College events (seminars, workshops, competitions, etc.)</option>
                  <option value="Sick leave / medical reasons">Sick leave / medical reasons</option><option value="Placement drives">Placement drives</option>
                  <option value="Company work (official tasks or visits)">Company work (official tasks or visits)</option>
                  <option value="Interviews">Interviews</option><option value="Family functions">Family functions</option>
                  <option value="Emergency situations">Emergency situations</option>
                  <option value="Travel-related reasons">Travel-related reasons</option>
                  <option value="Duty leave">Duty leave</option><option value="Others">Others</option>
                </select>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-neutral-200 mb-2">From Date</label>
                  <input class="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors " type="date" value="" name="startingDate" onChange={handleChange} />
                </div>
                <div>
                  <label class="block text-sm font-medium text-neutral-200 mb-2">To Date</label>
                  <input class="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors " type="date" value="" name="endingDate" onChange={handleChange} />
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-neutral-200 mb-2">Leave Time</label>
                  <input class="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors " type="time" value="" name="leaveTime" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-neutral-200 mb-2">Return Time</label>
                  <input class="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors " type="time" value="" name="returnTime" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-200 mb-2">Additional Remarks (Optional)</label>
                <textarea name="remark" placeholder="Any additional information for your mentor or admin" class="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 min-h-22.5 transition-colors "></textarea>
              </div>
              <button type="submit" disabled="" class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium transition-colors">
                <FileText  class="w-4 h-4" />Submit Leave Application
              </button>
            </form>
          </div>
          {/* REQUEST LIST */}
          <div className="bg-neutral-900 border-neutral-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                <User className="w-4 h-4 text-neutral-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">My Leave Requests</h2>
                <p className="text-sm text-neutral-400">
                  Track the status of your applications
                </p>
              </div>
            </div>
            {/* EMPTY STATE */}
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
              <div className="text-neutral-400">No leave requests yet</div>
              <div className="text-sm text-neutral-500 mt-1">
                Your submitted applications will appear here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// resuable components

const StatCard = ({ title, value, color = "text-neutral-100" }) => (
  <div className="bg-neutral-900 border-neutral-800 rounded-lg p-4">
    <div className={`text-2xl font-bold ${color}`}>{value}</div>
    <div className="text-sm text-neutral-400">{title}</div>
  </div>
);


const Input = ({label, ...props}) =>(
  <div>
    <label className="block text-sm font-medium text-neutral-200 mb-2">{label}</label>
    <input {...props} className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-0 focus:ring-neutral-500" /> 
  </div>
)