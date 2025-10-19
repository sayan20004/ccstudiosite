import React from 'react'


const Card = (props) => {
  const cardWidth = 'w-[300px]';

  return (
    <div className='flex-shrink-0'>
        <img src={props.img} alt="" className={`${cardWidth} rounded-2xl`}/>
        <div className={`bottom bg-gray-200/20 text-black ${cardWidth} px-5 py-2 rounded-2xl mt-2`}>
            <h5 className='text-lg mb-2 font-bricolage '>{props.title}</h5>
            <p className='text-sm Quicksand'>{props.desc}</p>
        </div>
    </div>
  )
}

export default Card