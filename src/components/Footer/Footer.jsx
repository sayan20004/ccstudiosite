import React from 'react';

import {RiInstagramLine,RiFacebookCircleLine, RiMailCheckFill} from "@remixicon/react"
const Footer = () => {

  const darkBgColor = '#1a1a1a'; 


  const orangeColor = '#FF6F3D';
  const navLinks = [
    { name: 'Services', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Contact', href: '#' },
  ];
  const SocialIconMap = {
    Instagram: RiInstagramLine,
    Facebook: RiFacebookCircleLine,

    Email: RiMailCheckFill, 
  };


  const socialIcons = [
    { icon: 'Instagram', href: '#' },
    { icon: 'Facebook', href: '#' },
    { icon: 'Email', href: '#' },
  ];

  return (
    <footer 
      style={{ 
        backgroundColor: darkBgColor 
      }} 

      className="text-white h-screen flex flex-col relative justify-between pt-8 pb-6 px-4 sm:px-6 lg:px-8 Quicksand"
    >
      



      <div className="max-w-7xl mx-auto w-full"> 
        

        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-gray-700">
          

          <div className="flex items-center space-x-2 mb-4 md:mb-0">

            <span className="text-3xl font-bold" style={{ color: orangeColor }}>
              
              CC.STUDIO
            </span>
          </div>


          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-12">
            

            <nav className="flex space-x-8 text-lg font-medium">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-gray-300 transition duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>


            <a 
              href="#" 
              className="px-6 py-3 rounded-md font-bold text-lg transition duration-300"
              style={{ backgroundColor: orangeColor, color: 'white' }}
            >
              Book A Call
            </a>
          </div>
        </div>
      </div> 

      

      <div className="max-w-7xl mx-auto w-full">

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-gray-400 text-sm">
          

          <div className="mb-4 sm:mb-0">
            @ copyright cc.studio 2025. All Rights Reserved
          </div>


          <div className="flex space-x-4">
           {socialIcons.map((social) => {

              const IconComponent = SocialIconMap[social.icon];

              return (
                <a 
                  key={social.icon} 
                  href={social.href} 
                  aria-label={social.icon}
                  className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center 
                           hover:border-white hover:text-white transition duration-200"
                >

                  {IconComponent && <IconComponent className="text-xl text-white" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <h1 className='absolute text-[21vw] -bottom-1.5 font-bricolage opacity-5'>CC.STUDIO</h1>
    </footer>
  )
}

export default Footer;