import React from 'react'
import { useState } from 'react'

const Login = () => {
  const roles = ['Student', 'Mentor', 'Admin']
  const [role, setRole] = useState('Student')

  return (
    <div className="flex flex-col gap-5 h-screen w-screen justify-center items-center">
      <div className="w-[450px] border-2 rounded-xl border-white/10 bg-neutral-950 flex flex-col gap-4 p-8">
        <div className="text-center mb-2">
          <p className="text-4xl font-bold text-white">Welcome Back</p>
          <span className="text-gray-500 text-sm">Sign in to your account</span>
        </div>
        <div className="flex flex-row gap-2">
          {roles.map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`border rounded-lg px-6 py-2 text-sm ${
                role === r ? 'bg-white text-black' : 'bg-transparent text-white border-white/20'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-300 text-left">University UID</label>
          <input
            type="text"
            placeholder="Enter your University UID"
            className="border rounded-lg p-3 bg-[#1c1c1c] text-white border-white/10 focus:outline-none focus:border-white/30"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-300 text-left">Password</label>
          <input
            type="password"
            placeholder="******"
            className="border rounded-lg p-3 bg-[#1c1c1c] text-white border-white/10 focus:outline-none focus:border-white/30"
          />
        </div>
        <button className="bg-white text-black font-medium rounded-lg px-8 py-3 w-full hover:bg-neutral-200 transition-all">
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Login
