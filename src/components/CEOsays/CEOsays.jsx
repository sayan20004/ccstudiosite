import React from 'react'
import ceoimg from '../../assets/img/ceo.png';
import ceo from '../../assets/img/ceoImg.jpg';


const CEOsays = () => {
  return (
    <div className="min-h-screen bg-white px-10 py-20 flex flex-col justify-center items-center text-gray-800">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        <div>
          <div className="
    text-4xl          // Default: 2.5rem (40px)
    md:text-[3rem]    // Medium screens: 3rem (48px)
    lg:text-5xl       // Large screens: 3rem (48px, or use a custom size like [3.5rem] for bigger)

    font-semibold 
    leading-tight 
    mb-6              // Smaller bottom margin on mobile
    md:mb-8           // Original bottom margin on medium screens and up
    relative
">
    We understand your needs better than anybody and we know boring when
    we see it. So we will keep your audience engaged.
</div>


          <div className="flex items-center gap-4 mb-12">
            <img
              src={ceo}
              alt="Sayan Maity"
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-black">
                Sayan Maity
              </h3>
              <p className="text-gray-500 text-sm">Founder,CC Studio</p>
            </div>
          </div>


        </div>


        <div className="relative">

          <div className="absolute top-6 right-6 bg-[#F08C57] w-full h-full rounded-3xl -z-10"></div>


         <img
    src={ceoimg}
    alt="Team"
    className="
        rounded-3xl 
        w-1/1             // Full width on small screens (mobile)
        h-auto             // Ensures the height adjusts automatically to maintain aspect ratio

        md:w-full           // Takes 1/3 of the width on medium screens and up
        md:h-full          // If used in a flex/grid container, it fills the height
        object-cover       // Ensures the image covers its container area without stretching
    "
/>
        </div>
      </div>
    </div>
  )
}

export default CEOsays