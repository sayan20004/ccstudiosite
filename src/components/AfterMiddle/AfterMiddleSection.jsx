import React from 'react'
import Card from './Card' // Note: This Card component is not used here, but imported
import createad from '../../assets/img/createads.png'
import Pricing from '../../assets/img/pricing.png'
import connection from '../../assets/img/connection.png'
import quality from '../../assets/img/quality.png'



const cards = [
  // ... (Your card data remains the same)
  {
    type: "image",
    image: createad,
  },
  {
    type: "text",
    title: "We create ads",
    description:
      "We create custom, data driven ads for all major platforms, engineered to maximize your return on investment (ROI).",
    color: "bg-[#B0CE88]",
  },
  {
    type: "image",
    image:
      connection,
  },
  {
    type: "text",
    title: "We create connection",
    description:
      "We engineer brand stories and digital experiences that evoke trust, desire, and loyalty translating authentic emotion into customer action.",
    color: "bg-[#ED3F27]",
  },
  {
    type: "text",
    title: "Customizable Pricing",
    description:
      "Flexible service models designed to fit your growth stage and project scope. You only pay for the strategic value we deliver.",
    color: "bg-[#FF9013]",
  },
  {
    type: "image",
    image:
      Pricing,
  },
  {
    type: "text",
    title: "We crave for quality",
    description:
      "Our studio maintains uncompromising standards, ensuring that every digital asset we deliver from prototypes to websites is built to last and outperform.",
    color: "bg-[#FF3F7F]",
  },
  {
    type: "image",
    image:
      quality,
  },
];

const AfterMiddleSection = () => {
    
  return (
  
    <div className="px-4 sm:px-10 py-10 md:py-20 flex justify-center">
      
      
      {/* GAP REDUCED: Changed 'gap-6' to 'gap-4'
        Tailwind gap scale: 1 = 0.25rem (4px), 4 = 1rem (16px), 6 = 1.5rem (24px)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl w-full auto-rows-fr">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`rounded-3xl overflow-hidden transition-transform duration-300
            
            // BRICK LAYOUT CLASSES:
            // Apply row-span-2 on specific cards only on medium screens (md) and up
            ${(i === 1 || i === 4) ? 'md:row-span-2' : ''} 
            
            // Conditional Styling for Text Cards:
            ${card.type === "text" ? `${card.color} p-6 sm:p-8 flex flex-col justify-between` : "bg-gray-100"}
            `}
          >
            {card.type === "image" ? (

              <img
                src={card.image}
                alt="Workshop"
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <div>

                  <h2 className="text-xl md:text-2xl font-semibold text-black mb-3 leading-snug">
                    {card.title}
                  </h2>
                  <p className="text-white mb-6">{card.description}</p>
                </div>

                <button className="flex items-center text-black font-semibold gap-2 mt-4">
                  Know More{" "}
                  <span className="text-white bg-black rounded-full w-7 h-7 flex items-center justify-center hover:-rotate-45 duration-500 ease-in-out cursor-pointer">
                    →
                  </span    >
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AfterMiddleSection