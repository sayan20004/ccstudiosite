import React from 'react'

const Card = ({ type, title, description, image }) => {
  return (
    <div className='w-[300px] h-[300px] bg-lime-300 rounded-2xl'>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-5">
        {type === "image" ? (
            <div className="flex flex-col items-center">
            <img
                src={image}
                alt={title}
                className="rounded-xl mb-3 h-48 w-full object-cover"
            />
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            </div>
        ) : (
            <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
            </div>  
        )}
      </div>
    </div>
  )
}

export default Card