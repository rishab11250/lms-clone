import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { FileText, Plus, User, Clock, Calendar, Check, AlertCircle } from "lucide-react";

const STATUS_CONFIG = {
  pending: {
    label: "pending",
    colors: "text-amber-300 bg-amber-600/20 border-amber-700/50",
    icon: AlertCircle
  },
  approved: {
    label: "approved",
    colors: "text-emerald-300 bg-emerald-600/20 border-emerald-700/50",
    icon: Check
  },
  rejected: {
    label: "rejected",
    colors: "text-red-300 bg-red-600/20 border-red-700/50",
    icon: AlertCircle
  }
};

const calculateDays = (start, end) => {
  if (!start || !end) return "0 days";
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffTime = Math.abs(endDate - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  return `${diffDays} day${diffDays > 1 ? "s" : ""}`;
};

export default function StudentApplyLeave() {
  const [requests, setRequests] = useState([]);
  const [form, setForm] = useState({
    category: "",
    startingDate: "",
    endingDate: "",
    leaveTime: "",
    returnTime: "",
    remark: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("leaveRequests");
    if (saved) {
      setRequests(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.category || !form.startingDate || !form.endingDate) return;

    const newRequest = {
      id: Date.now(),
      ...form,
      status: "pending",
      submittedAt: new Date().toISOString()
    };

    const updated = [newRequest, ...requests];
    setRequests(updated);
    localStorage.setItem("leaveRequests", JSON.stringify(updated));
    setForm({
      category: "",
      startingDate: "",
      endingDate: "",
      leaveTime: "",
      returnTime: "",
      remark: ""
    });
  };

  const pending = requests.filter(r => r.status === "pending").length;
  const approved = requests.filter(r => r.status === "approved").length;
  const rejected = requests.filter(r => r.status === "rejected").length;

  return (
    <div className="min-h-screen pt-20 bg-neutral-950 text-white">
      <Navbar />
      <div className="px-6 pt-5 pb-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Apply for Leave</h1>
          <p className="text-neutral-400">
            Submit your leave application and track your requests
          </p>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard title="Total Applications" value={requests.length} />
          <StatCard title="Pending Review" value={pending} color="text-amber-300" />
          <StatCard title="Approved" value={approved} color="text-emerald-300" />
          <StatCard title="Rejected" value={rejected} color="text-red-300" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                <Plus className="w-4 h-4 text-neutral-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">New Leave Application</h2>
                <p className="text-sm text-neutral-400">
                  Fill out the form to submit your leave request
                </p>
              </div>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-neutral-200 mb-2">
                  Leave Category
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors"
                >
                  <option value="">Select category</option>
                  <option value="Personal reasons">Personal reasons</option>
                  <option value="Festival celebration">Festival celebration</option>
                  <option value="Hackathon participation">Hackathon participation</option>
                  <option value="College events (seminars, workshops, competitions, etc.)">College events (seminars, workshops, competitions, etc.)</option>
                  <option value="Sick leave / medical reasons">Sick leave / medical reasons</option>
                  <option value="Placement drives">Placement drives</option>
                  <option value="Company work (official tasks or visits)">Company work (official tasks or visits)</option>
                  <option value="Interviews">Interviews</option>
                  <option value="Family functions">Family functions</option>
                  <option value="Emergency situations">Emergency situations</option>
                  <option value="Travel-related reasons">Travel-related reasons</option>
                  <option value="Duty leave">Duty leave</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-2">From Date</label>
                  <input
                    type="date"
                    name="startingDate"
                    value={form.startingDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-2">To Date</label>
                  <input
                    type="date"
                    name="endingDate"
                    value={form.endingDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-2">Leave Time</label>
                  <input
                    type="time"
                    name="leaveTime"
                    value={form.leaveTime}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-200 mb-2">Return Time</label>
                  <input
                    type="time"
                    name="returnTime"
                    value={form.returnTime}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-200 mb-2">Additional Remarks (Optional)</label>
                <textarea
                  name="remark"
                  value={form.remark}
                  onChange={handleChange}
                  placeholder="Any additional information for your mentor or admin"
                  className="w-full px-3 py-2 rounded bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500 min-h-24 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={!form.category || !form.startingDate || !form.endingDate}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium transition-colors"
              >
                <FileText className="w-4 h-4" />
                Submit Leave Application
              </button>
            </form>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
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
            {requests.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                <div className="text-neutral-400">No leave requests yet</div>
                <div className="text-sm text-neutral-500 mt-1">
                  Your submitted applications will appear here
                </div>
              </div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {requests.map((req) => {
                  const status = STATUS_CONFIG[req.status];
                  const StatusIcon = status.icon;
                  return (
                    <div key={req.id} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
                            <FileText className="w-4 h-4 text-neutral-400" />
                          </div>
                          <div>
                            <h3 className="font-medium text-neutral-100">{req.category}</h3>
                            <p className="text-sm text-neutral-400">
                              Applied on {new Date(req.submittedAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                              })}
                            </p>
                          </div>
                        </div>
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded border ${status.colors}`}>
                          <StatusIcon className="w-3 h-3" />
                          {status.label}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3 text-neutral-500" />
                          <span className="text-neutral-300">{req.startingDate} - {req.endingDate}</span>
                        </div>
                        {(req.leaveTime || req.returnTime) && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3 text-neutral-500" />
                            <span className="text-neutral-300">
                              {req.leaveTime || "--:--"} - {req.returnTime || "--:--"}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-neutral-500" />
                          <span className="text-neutral-300">{calculateDays(req.startingDate, req.endingDate)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-neutral-500" />
                          <span className="text-neutral-300">0 credits</span>
                        </div>
                      </div>
                      {req.remark && (
                        <div className="p-3 bg-neutral-800 rounded border border-neutral-700 space-y-2">
                          <div>
                            <span className="text-xs font-medium text-neutral-400">Remark:</span>
                            <p className="text-sm text-neutral-300 mt-1">{req.remark}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const StatCard = ({ title, value, color = "text-neutral-100" }) => (
  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
    <div className={`text-2xl font-bold ${color}`}>{value}</div>
    <div className="text-sm text-neutral-400">{title}</div>
  </div>
);
