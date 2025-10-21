import React from 'react'
import '../Utils.css'

const Header = () => {
  return (
    <div className='text-white mt-10 md:mt-15 px-4'> 
        <h1 className='text-5xl sm:text-6xl md:text-8xl text-center font-bricolage'>
            Strategy, <br /> Design, <br /> and Digital Growth.
        </h1>
        <div className='flex justify-center'>
            <p className='text-gray-100 text-sm font-light w-[90%] sm:w-[50%] md:w-[30%] text-center mt-7 Quicksand'>
                We are an Innovation Studio that designs, develops, and launches digital solutions from custom websites to market ready products.
            </p>
        </div>
        
        <div className='flex justify-center mt-5'>
            <button className='
                w-[140px] px-6 py-2 rounded-xl text-white Quicksand cursor-pointer 
                
                // BASE STYLES
                bg-amber-600 
                
                // HOVER EFFECT CLASSES
                hover:bg-amber-600 
                hover:shadow-lg 
                hover:shadow-amber-500/50 
                transition duration-300
                
            '>
                Book a call
            </button>
        </div>
    </div>
  )
}

export default Header