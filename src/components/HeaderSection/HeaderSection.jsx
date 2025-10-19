import React from 'react'
import Navbar from './Navbar'
import Header from './Header'

const HeaderSection = () => {
  return (
    <div className='h-screen w-full bg-black text-gray-400'>
      <Navbar />
      <Header/>
    </div>
  )
}

export default HeaderSection