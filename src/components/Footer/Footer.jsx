import React from 'react';
// NEW: Import Link for client-side routing
import { Link } from 'react-router-dom'; 

// Use the icons from the image: Instagram, LinkedIn, Discord, YouTube, Twitter
import { RiInstagramLine, RiLinkedinBoxFill, RiDiscordFill, RiYoutubeFill, RiTwitterFill } from "@remixicon/react";

const Footer = () => {
  // --- Aesthetic Variables ---
  const darkBgColor = '#000000'; 
  const textColor = '#e0e0e0'; 
  
  // --- Content Structure from Image ---
  
  // FIX: Updated hrefs to map to the new routes (/services, /contact)
  const companyLinks = [
    { name: 'About Us', href: '/services' }, // Mapped to ServicesPage
    { name: 'Contact', href: '/contact' },   // Mapped to ContactPage
 
  ];

  const contactInfo = {
    sayan: {
      phone: '+91 90647 01142',
    },
    abhijit: {
      phone: '+91 81164 37985',
    },
    suprakash: {
      phone: '+91 81720 07130',
    },
    email: 'connect.chetnastudio@gmail.com',
  };

  // --- Social Icons from Image (left side) ---
  const SocialIconMap = {
    Instagram: RiInstagramLine,
    LinkedIn: RiLinkedinBoxFill,
    Discord: RiDiscordFill, 
    YouTube: RiYoutubeFill,
    Twitter: RiTwitterFill,
  };

  const socialIcons = [
    { icon: 'Instagram', href: '#' },
    { icon: 'LinkedIn', href: '#' },
    { icon: 'Discord', href: '#' },
    { icon: 'YouTube', href: '#' },
    { icon: 'Twitter', href: '#' },
  ];
  
  // --- Helper for Contact Items ---
  const ContactItem = ({ label, value, isPhone = false }) => (
    <div className="mb-2">
      <p className="text-sm font-light text-gray-400">{label}</p>
      <p className={`text-base font-semibold ${isPhone ? 'text-white' : 'text-gray-400'}`}>{value}</p>
    </div>
  );
  
  // --- Component Render ---
  return (
    <footer 
      style={{ 
        backgroundColor: darkBgColor,
        color: textColor 
      }} 
      className="font-sans py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full ">
        {/* Main Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-16">
          
          {/* Left Section: Logo & Socials */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 flex flex-col items-start space-y-8">
            <div className="flex flex-col items-start space-y-4">
              {/* Logo links to home */}
              <Link to="/" className="w-12 h-12">
                <h1 className='text-4xl'>cc.studio</h1>
              </Link>

              <p className="text-sm text-gray-400">Let's connect with our socials</p>

              {/* Social Icons */}
              <div className="flex space-x-3 mt-2">
                {socialIcons.map((social) => {
                  const IconComponent = SocialIconMap[social.icon];
                  return (
                    <a 
                      key={social.icon} 
                      href={social.href} 
                      aria-label={social.icon}
                      className="text-white hover:text-gray-400 transition duration-200"
                    >
                      {IconComponent && <IconComponent className="w-6 h-6" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-6 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {/* FIX: Use Link instead of a */}
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Get In Touch */}
          <div>
            <h3 className="text-base font-bold text-white mb-6 uppercase tracking-wider">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <ContactItem label="Sayan Maity, Founder" value={contactInfo.sayan.phone} isPhone={true} />
              <ContactItem label="Abhijit Payra, Founder" value={contactInfo.abhijit.phone} isPhone={true} />
              <ContactItem label="Suprakash Das, Co-Founder" value={contactInfo.suprakash.phone} isPhone={true} />

              
              <p className="text-gray-400 text-sm">{contactInfo.email}</p>
              
              <p className="text-gray-400 text-sm max-w-[200px] leading-relaxed">
                {contactInfo.address}
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom (Copyright) */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 cc.studio Pvt. Ltd.
          </p>
          <p className="text-gray-400 text-sm">
            All Rights Reserved. (site is under construction)
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;