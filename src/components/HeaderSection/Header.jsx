import React from 'react'
import '../Utils.css'

const Header = () => {
  return (
    // Use a smaller top margin on mobile (mt-10) and the original on medium screens (md:mt-15)
    <div className='text-white mt-10 md:mt-15 px-4'> 
        {/* On mobile, use a much smaller text size (text-5xl or 6xl), then increase on medium screens (md:text-8xl). */}
        <h1 className='text-5xl sm:text-6xl md:text-8xl text-center font-bricolage'>
            Strategy, <br /> Design, <br /> and Digital Growth.
        </h1>
        <div className='flex justify-center'>
            {/* On mobile, use a wider column (w-[90%]), 
                then restrict it to 50% on small screens (sm:w-[50%]), 
                and the original 30% on medium screens (md:w-[30%]).
            */}
            <p className='text-gray-100 text-sm font-light w-[90%] sm:w-[50%] md:w-[30%] text-center mt-7 Quicksand'>
                We are an Innovation Studio that designs, develops, and launches digital solutions from custom websites to market ready products.
            </p>
        </div>
        
        {/* The button container and button itself should work fine as is, but ensure the w- class is mobile-friendly. */}
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