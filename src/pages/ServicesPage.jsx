import React from 'react'
import AfterCeoSays from '../components/AfterCeoSays/AfterCeoSays';
import AfterMiddleSection from '../components/AfterMiddle/AfterMiddleSection';
import RightPart from '../components/MiddleSection/RightPart'; // Reusing the card display

const ServicesPage = () => {
  return (
    <div className='w-full pt-20 min-h-screen bg-white text-gray-800 overflow-x-hidden'>
      <div className='w-full mx-auto p-4 sm:p-8'>
        
        {/* Services Hero Section (Custom Header) */}
        <div className='w-full flex flex-col md:flex-row justify-between mb-16'>
          <div className='w-full md:w-[45%] flex flex-col justify-center px-4 sm:px-8 md:px-0 mb-8 md:mb-0'>
            <h1 className='text-6xl sm:text-7xl md:text-8xl text-black font-bricolage mb-6'>
                Our <span className='text-amber-600'>Digital</span> Services
            </h1>
            <p className='text-lg Quicksand'>
              We are an Innovation Studio that designs, develops, and launches digital solutions. Our services are tailored to accelerate your growth from strategy to market-ready products.
            </p>
          </div>
          <div className='w-full md:w-[100%] flex flex-col justify-center -mr-150'>
            <RightPart/>
          </div>
        </div>

        {/* Core Services Section */}
        <h2 className='text-center text-4xl sm:text-5xl font-black text-gray-900 mb-12 font-bricolage'>
          Full-Stack <span className='text-amber-600'>Execution</span>
        </h2>
        <AfterMiddleSection/>
        
        {/* Additional Services */}
        
      </div>
    </div>
  )
}

export default ServicesPage