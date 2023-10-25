import { MapPin } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <div className=' p-20'>
      <div className='flex'>
        <MapPin color='#ffffff' strokeWidth={3} />
        <h3 className='mx-2 text-third font-medium'>Hagvägen 18 Östersund</h3>
      </div>
    </div>
  );
}
