import React from 'react'
// import Navbar from './Navbar' // REMOVED
import Header from './Header'

const HeaderSection = () => {
  return (
    <div className='h-[80vh] md:h-screen w-full bg-black text-gray-400'>
      {/* <Navbar /> */} 
      <Header/>
    </div>
  )
}

export default HeaderSection