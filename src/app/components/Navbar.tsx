'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';

const navItems = [
  { label: 'Vaccinationer & laser', link: '/' },
  { label: 'Priser', link: '/priser' },
  { label: 'Kontakta Oss', link: '/kontakta' },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='py-3'>
      <div className='flex px-5 justify-between items-center md:px-10'>
        <Link href={'/'}>
          <Image
            src={'/favicon.svg'}
            alt={'AO'}
            width={80}
            height={80}
          />
        </Link>
        <ul className='hidden md:flex justify-center items-center'>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='text-md font-semibold ml-12 text-xl  hover:text-secondary'
            >
              <NavLink href={item.link} title={item.label} />
            </li>
          ))}
        </ul>
        <div className='mobile-menu block md:hidden'>
          <button
            onClick={() => {
              setNavbarOpen(!navbarOpen); // Toggle the state
            }}
            className='flex items-center p-3'
          >
            {navbarOpen ? (
              <X width={40} height={40} />
            ) : (
              <Menu width={40} height={40} />
            )}
          </button>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay toggleNavbar={setNavbarOpen} links={navItems} /> : null}
    </nav>
  );
};

export default Navbar;
