import { useState } from "react";
import Navbar from "../components/navbar";
import StatCard from "../components/Stat";
import { Plus } from "lucide-react";

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
                  <input class="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors " type="date" value="" name="endingDate" onChange={handleChange}  />
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
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                </svg>Submit Leave Application
              </button>
            </form>
          </div>
          <div class="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-neutral-400 w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z">
                  </path>
                </svg>
              </div>
              <div>
                <h2 class="text-xl font-semibold">My Leave Requests</h2>
                <p class="text-sm text-neutral-400">Track the status of your applications</p>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                <div class="flex items-start justify-between mb-3">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-neutral-400 w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z">
                        </path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-medium text-neutral-100">Hackathon participation</h3>
                      <p class="text-sm text-neutral-400">Applied on 3/30/2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
