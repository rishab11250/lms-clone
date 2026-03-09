import React from 'react'
import {Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import StudentDashboard from './pages/studentDashboard.jsx'
import './App.css'

function App() {
  
  return (
    <>
      <div className='bg-[rgb(12,12,12)] text-white text-center'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/studentDashboard" element={<StudentDashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App
