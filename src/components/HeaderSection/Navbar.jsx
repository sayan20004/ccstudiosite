import React, { useState } from 'react';
import '../Utils.css'
import arrow from '../../assets/img/arrow.png'

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    // On mobile, reduce padding (p-5), then increase on medium screens and up (md:py-5 md:px-20)
    // Use `flex justify-between` on all screens
    <div className='flex justify-between p-5 md:py-5 md:px-20 Quicksand lowercase'>
        {/*
            The arrow's positioning and visibility are kept as is, but its right position is adjusted for small screen breakpoints
            if you were to use it on mobile. For simplicity, I'm keeping the original right values.
        */}
        <img src={arrow} alt="" className={`absolute w-1/20 top-10 transition-opacity duration-150 ease-in-out
                            ${isHovering ? 'opacity-100 md:right-[200px] right-[40px]' : 'opacity-0 md:right-[180px] right-[20px]'}`} 
                id='arrow' />

        {/* On mobile, hide the links (hidden). On medium screens and up, display as flex (md:flex) */}
        <div className="left hidden md:flex justify-between gap-6">
            <a href="#">cc.Services</a>
            <a href="#">cc.Works</a>
            <a href="#">cc.Contact</a>
        </div>
        
        {/* On mobile, reduce font size to 2xl, then set to 3xl on medium screens and up. */}
        <div className="middle font-bricolage text-2xl md:text-3xl text-lime-400">
            <h3>CC.STUDIO</h3>
        </div>
        
        <div className="right">
            <button className='px-4 py-1 md:px-6 md:py-2 border border-amber-600 rounded-2xl text-amber-600 cursor-pointer text-sm md:text-base' 
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}>
                Book a call 
            </button>
        </div>
    </div>
  )
}

export default Navbar