'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Menu, Phone, X } from 'lucide-react';
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
    <nav className='mt-4 md:mt-10 mx-2'>
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
              className='text-md ml-12 text-md hover:text-secondary'
            >
              <NavLink href={item.link} title={item.label} />
            </li>
          ))}
          <li className='mx-2 bg-third p-1 rounded-lg text-white'>
          <Phone width={20} height={20} />
          </li>
          <li className='bg-third p-1 rounded-lg text-white'>
            <Mail width={20} height={20}  />
          </li>
        </ul>
        <div className='mobile-menu block md:hidden'>
          <button
            onClick={() => {
              setNavbarOpen(!navbarOpen);
            }}
            className='flex items-center p-3'
          >
            {navbarOpen ? (
              <X width={40} height={40} strokeWidth={3} className='text-secondary' />
            ) : (
              <Menu width={40} height={40} strokeWidth={3} className='text-secondary' />
            )}
          </button>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay toggleNavbar={setNavbarOpen} links={navItems} /> : null}
    </nav>
  );
};

export default Navbar;
