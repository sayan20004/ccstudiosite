import React from 'react'
import Card from './Card'
import '../Utils.css'
import card1 from '../../assets/img/prototype.png';
import card2 from '../../assets/img/webapp.png';
import card3 from '../../assets/img/brand.png';
import card4 from '../../assets/img/social.png';

const RightPart = () => {
  return (


    <div className='w-full md:w-[55%] flex flex-col justify-center px-4'>
      
      <div className='flex gap-4 overflow-x-scroll hide-scrollbar pb-4'>
        <Card
        img={card1}
        title="Product Prototyping & Dev."
        desc="Discovery to Launch. Build market-ready digital ventures (MVPs)."
        />

        <Card
        img={card2}
        title="Strategic Web & App Design"
        desc="Engineered for Conversion. High-performance websites and apps."
        />
        <Card
        img={card3}
        title="Brand Strategy & Identity"
        desc="Define and Design. Compelling visual identity and market position."
        />
        <Card
        img={card4}
        title="Social Media Management"
        desc="Drive Traffic and Authority. Expertly managed social campaigns."
        />
      </div>
    </div>
  )
}

export default RightPart