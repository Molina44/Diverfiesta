import React from 'react';
import LogoV1 from '../atoms/logos/logoV1';
import LinkV1 from '../atoms/links/LinkV1';
import TituloV1 from '../atoms/Titulos/TituloV1';
import TextoV1 from '../atoms/Texto/Texto';
import { Camera , Facebook, Instagram, Twitter , Youtube, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600">
      <div className="container mx-auto px-4 grid grid-cols-12 gap-4 py-8 ">
        {/* Logo and Contact Section */}
        <div className="col-span-8">
          <LogoV1 size={60} className="mb-8" />
          <div className="text-sm">
            <div className="mb-6">
            <TituloV1>Address:</TituloV1>
            <TextoV1>Level 1, 12 Sample St, Sydney NSW 2000</TextoV1>
            </div>
            <TituloV1>Contact:</TituloV1>
            <TextoV1 >1800 123 4567</TextoV1>
            <TextoV1>info@relume.io</TextoV1>
            
            {/* Social Icons */}
            <div className="flex space-x-3 mt-4">
              <LinkV1 href="#" className="text-xl"><Facebook /></LinkV1>
              <LinkV1 href="#" className="text-xl"><Instagram/></LinkV1>
              <LinkV1 href="#" className="text-xl"><Twitter/></LinkV1>
              <LinkV1 href="#" className="text-xl"><Youtube/></LinkV1>
              <LinkV1 href="#" className="text-xl"><Linkedin/></LinkV1>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="col-span-4 grid grid-cols-2 gap-4 text-sm place-content: center;">
          <div className='grid grid-rows-5 gap-2 '> 
            <LinkV1 href="#" className="block mb-2">Link One</LinkV1>
            <LinkV1 href="#" className="block mb-2">Link Two</LinkV1>
            <LinkV1 href="#" className="block mb-2">Link Three</LinkV1>
            <LinkV1 href="#" className="block mb-2">Link Four</LinkV1>
            <LinkV1 href="#" className="block mb-2">Link Five</LinkV1>
          </div>
          <div className='grid grid-rows-5 gap-2 '>
            <LinkV1 href="#" className="block mb-2">Link Six</LinkV1>
            <LinkV1 href="#" className="block mb-2">Link Seven</LinkV1>
            <LinkV1 href="#" className="block mb-2">Link Eight</LinkV1>
            <LinkV1 href="#" className="block mb-2">Link Nine</LinkV1>
            <LinkV1 href="#" className="block mb-2">Link Ten</LinkV1>
          </div>
        </div>
      </div>

      {/* Copyright and Policy Links */}
      <div className="container mx-auto px-4 mt-4 p-4 border-t border-gray-300 text-sm grid grid-cols-12 items-center">
        <TextoV1 className='col-span-6'>© 2024 Relume. All rights reserved.</TextoV1>
        <div className="col-span-6 text-right space-x-4">
          <LinkV1 href="#" >Privacy Policy</LinkV1>
          <LinkV1 href="#" >Terms of Service</LinkV1>
          <LinkV1 href="#" >Cookies Settings</LinkV1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;