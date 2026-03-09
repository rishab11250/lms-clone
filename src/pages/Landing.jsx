import React from 'react'
import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'
const Landing = () => {
    return (
        <div className='flex flex-col gap-10 h-screen w-screen justify-center items-center'>
            <div>
                <h1 className='text-7xl font-extrabold'>Coding</h1>
                <h1 className='text-7xl font-extrabold text-gray-400'>Gita</h1>
                <p className='text-gray-400 text-xl m-5'>Smart, simple, and reliable attendance for modern classrooms.</p>
            </div>
            <div>
                <Link to="/login"><button className='bg-white rounded-xl text-black text-sm px-5 py-3 font-medium cursor-pointer hover:bg-neutral-200 transition-all'>Login</button></Link>
            </div>
            <div className='grid grid-cols-2 gap-5 w-200 k'>
                <FeatureCard title={"Role-based dashboards"} description={"Admin, Mentor, and Student experiences tailored to their needs."} />
                <FeatureCard title={"Fast and secure access"} description={"Encrypted sessions and streamlined navigation."} />
            </div>
        </div>
    )
}

export default Landing