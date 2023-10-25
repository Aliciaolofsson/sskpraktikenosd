'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu'; // Import the HamburgerMenu component

interface Link {
  text: string;
  url: string;
}

const Navbar: React.FC = () => {
  const links: Link[] = [
    { text: 'Hem', url: '/' },
    { text: 'Om', url: '/om' },
    { text: 'Priser', url: '/priser' },
    { text: 'Kontakta oss', url: '/kontakta' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white p-4 px-10 font-medium text-lg'>
      <div className='flex justify-between items-center'>
        <Link href={'/'}>
          <Image className='' src='favicon.svg' alt='' width='80' height='80' />
        </Link>
        <div className='lg:hidden'>
          <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
        <ul className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          {links.map((link, index) => (
            <li className='mx-6' key={index}>
              <Link href={link.url} className='hover:text-secondary'>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
