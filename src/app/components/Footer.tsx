import { Facebook, MapPin } from 'lucide-react';
import React from 'react';
import SocialMediaIcon from './SocialMediaIcon';

export default function Footer() {
  return (
    <div className='bg-secondary grid grid-cols-1 p-5 md:p-12 text-sm text-white'>
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
      <div className='flex mt-6 items-center'>
        <SocialMediaIcon />
      </div>
    </div>
  );
}
