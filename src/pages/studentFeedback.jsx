import React from "react";
import Navbar from "../components/navbar";
import { Plus, MessageSquare } from "lucide-react";

export default function StudentFeedback() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20">
      <Navbar />
      <div className="pt-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Feedback</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium">
              <Plus className="w-4 h-4" />
              Create Feedback
            </button>
          </div>

          <div className="space-y-6">
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-400 mb-2">No feedback yet</h3>
              <p className="text-neutral-500 mb-6">Share your thoughts and help us improve!</p>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium">
                Submit Your First Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
