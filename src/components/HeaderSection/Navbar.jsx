import React, { useState } from 'react';
import '../Utils.css';
import Modal from './Modal'; // Import the Modal component

const Navbar = () => {
  // State for the radial ripple hover effect
  const [hoverData, setHoverData] = useState({
    isHovered: false,
    x: 0,
    y: 0,
  });

  // State to control the visibility of the callback modal
  const [isModalOpen, setIsModalOpen] = useState(false); 

  // --- Ripple Handlers ---
  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setHoverData({
      isHovered: true,
      x: x,
      y: y,
    });
  };

  const handleMouseLeave = () => {
    setHoverData({ ...hoverData, isHovered: false });
  };
  // -----------------------

  // --- Modal Handlers ---
  const handleBookCallClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // ----------------------

  return (
    <div className='flex justify-between p-5 md:py-5 md:px-20 Quicksand lowercase'>

        <div className="left hidden md:flex justify-between gap-6">
            <a href="#">cc.Services</a>
            <a href="#">cc.Works</a>
            <a href="#">cc.Contact</a>
        </div>

        <div className="middle font-bricolage text-2xl md:text-3xl text-lime-400">
            <h3>CC.STUDIO</h3>
        </div>

        <div className="right">
            <button
                className='custom-ripple-button px-4 py-1 md:px-6 md:py-2 border border-amber-600 rounded-2xl text-amber-600 cursor-pointer text-sm md:text-base bg-transparent transition-colors duration-300 relative overflow-hidden z-10'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleBookCallClick}
            >
                {/* Ripple Effect Span */}
                <span
                    className='ripple-effect'
                    style={{
                        left: hoverData.x,
                        top: hoverData.y,
                        transform: hoverData.isHovered ? 'scale(5)' : 'scale(0)',
                        opacity: hoverData.isHovered ? 1 : 0,
                    }}
                />

                {/* Button Text Span */}
                <span className="button-text relative z-20 transition-colors duration-300">
                    Book a call
                </span>
            </button>
        </div>

        {/* Conditional Modal Rendering */}
        {isModalOpen && <Modal onClose={handleCloseModal} />}

    </div>
  )
}

export default Navbar