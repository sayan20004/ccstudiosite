import React from 'react'
import LeftPart from './LeftPart'
import RightPart from './RightPart'

const MiddleSection = () => {
  return (

    <div className='w-full text-gray-800 py-10 md:py-0'> 
        <div className='flex flex-col md:flex-row justify-between mt-10 md:mt-40'>
          <LeftPart/>
          <RightPart/>
        </div>
        
        
        <div className='flex justify-center mt-10 md:mt-30 text-center px-4'>

          <h1 className='font-bricolage text-black text-4xl sm:text-5xl md:text-7xl mt-10 md:mt-20'>
            Help you to Launch <br className='hidden md:block' />Your Project
          </h1>
        </div>
    </div>
  )
}

export default MiddleSection