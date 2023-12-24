import { Facebook, MapPin } from 'lucide-react';
import React from 'react';
import SocialMediaIcon from './SocialMediaIcon';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='bg-secondary grid grid-cols-3 p-5 md:p-12 text-sm text-white'>
      <div className='flex flex-col'>
        <a href='tel: 070 56 56 066'>070 - 56 56 066</a>
        <a href='mailto:info@ssskpraktiken.se' className='mt-3'>
          info@sskpraktiken.se
        </a>
        <ul>
          <li className='leading-6 mt-3'>Hagvägen 18</li>
          <li> 832 96 Östersund</li>
          <li className='my-3'></li>
        </ul>
      </div>
      <div className='place-self-center'>
        <h2 className='font-semibold mb-4'>Formulär</h2>
        <ul className='space-y-2'>
          <li>
            <Link href={'/ovrigformular'}>Övriga vaccinationer</Link>
          </li>
          <li>
            <Link href={'/reseformular'}>Resevaccinationer</Link>
          </li>
        </ul>
      </div>{' '}
      <div className='flex mt-2 place-content-end'>
        <SocialMediaIcon />
      </div>
      <div className='flex items-center mt-6 pt-6 justify-center col-span-3 space-x-2'>
        <p>© 2023 SjuksköterskePraktiken</p>
        <span>|</span>
        <a href='https://storyset.com/'>Illustrationer av Storyset</a>
      </div>
    </div>
  );
}
