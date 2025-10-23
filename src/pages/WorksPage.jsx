import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowRightLine } from '@remixicon/react';

const WorksPage = () => {
  return (
    <div className='pt-20 min-h-screen bg-black text-gray-400 flex flex-col items-center justify-center p-4'>
      <h1 className='text-6xl sm:text-7xl md:text-8xl text-white font-bricolage mb-6 text-center'>
        Our <span className='text-lime-400'>Selected</span> Works
      </h1>
      <p className='text-lg Quicksand text-center w-full md:w-1/2 mb-10'>
        A showcase of our best projects, demonstrating strategy, design, and digital growth across various industries.
      </p>

      {/* Placeholder Project Cards - Apply the Card.jsx style philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {['E-commerce Platform', 'AI-Powered MVP', 'Corporate Rebrand'].map((title, index) => (
          <div 
            key={index} 
            className={`
              bg-[#282828] p-6 rounded-2xl shadow-xl 
              hover:bg-amber-600 hover:text-white transition duration-300
              flex flex-col justify-between
            `}
          >
            <h2 className="text-3xl font-bricolage mb-3 font-bold">{title}</h2>
            <p className="text-gray-400 text-sm mb-6 hover:text-white transition duration-300">
              {index === 0 && "Designed and developed a scalable e-commerce solution that boosted client sales by 40%."}
              {index === 1 && "From concept to launch, we built an innovative MVP with built-in machine learning capabilities."}
              {index === 2 && "A complete visual identity overhaul and brand strategy implementation for a global finance firm."}
            </p>
            <Link to="/contact" className="text-amber-600 font-semibold flex items-center gap-2 hover:text-white transition duration-300">
              View Case Study <RiArrowRightLine className="w-5 h-5" />
            </Link>
          </div>
        ))}
      </div>
      
      <Link 
        to="/contact"
        className='mt-12 custom-ripple-button px-8 py-3 border border-lime-400 rounded-2xl text-lime-400 cursor-pointer text-lg bg-transparent transition-colors duration-300 relative overflow-hidden z-10 hover:text-white'
      >
          <span className="button-text relative z-20 transition-colors duration-300">Start Your Project</span>
      </Link>

    </div>
  )
}

export default WorksPage