import React from 'react'

const FeatureCard = ({title, description}) => {
    return (
        <div className='rounded-xl border border-gray-800 bg-black ps-6 pe-10 py-5 text-left'>
            <h3 className='text-white text-lg font-semibold mb-2'>{title}</h3>
            <p className='text-gray-400 text-sm'>{description}</p>
        </div>
    )
}

export default FeatureCard