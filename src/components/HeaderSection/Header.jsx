import React, { useState } from 'react'; // <<-- FIX 1: useState is now imported
import '../Utils.css';
import Modal from './Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // <<-- FIX 2: Define the handler functions
  const handleBookCallClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='text-white px-4'> 
        <h1 className='text-5xl sm:text-6xl md:text-8xl text-center font-bricolage py-10'>
            Strategy, <br /> Design, <br /> and Digital Growth.
        </h1>
        <div className='flex justify-center'>
            <p className='text-gray-100 text-sm font-light w-[90%] sm:w-[50%] md:w-[30%] text-center mt-7 Quicksand'>
                We are an Innovation Studio that designs, develops, and launches digital solutions from custom websites to market ready products.
            </p>
        </div>
        
        <div className='flex justify-center mt-5'>
            <button 
                className='
                    w-[140px] px-6 py-2 rounded-xl text-white Quicksand cursor-pointer 
                    
                    // BASE STYLES
                    bg-amber-600 
                    
                    // HOVER EFFECT CLASSES
                    hover:bg-amber-700 // Changed to 700 for a noticeable hover difference
                    hover:shadow-lg 
                    hover:shadow-amber-500/50 
                    transition duration-300
                '
                onClick={handleBookCallClick} // <<-- FIX 3: Add onClick to open the modal
            >
                Book a call
            </button>
            
            {/* Modal is rendered outside the button and uses the closing handler */}
            {isModalOpen && <Modal onClose={handleCloseModal} />}

        </div>
    </div>
  );
};

export default Header;