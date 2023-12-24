'use client';
import React from 'react';
import ContactForm from '@/app/(pages)/kontakta/ContactForm';
import Icon from '@/app/components/Icon';
import { Clock, MapPin, Phone } from 'lucide-react';
import { Reveal } from '@/app/components/Reveal';

interface ContactItem {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const contactItems: ContactItem[] = [
  {
    title: 'Ring oss',
    icon: <Phone />,
    content: (
      <>
        <p>Du får tala med oss direkt</p>
        <p>Svarar vi inte så kontaktar vi dig senast dagen därpå</p>
        <div>
          <a href='tel:0705656066'>070 - 56 56 066</a>
        </div>
      </>
    ),
  },
  {
    title: 'Öppettider',
    icon: <Clock />,
    content: <p>Anpassas efter ditt behov så långt som möjligt</p>,
  },
  {
    title: 'Hitta hit',
    icon: <MapPin />,
    content: (
      <>
        <p>Hagvägen 18 Östersund</p>
        <p>Fri parkering utanför mottagningen</p>
      </>
    ),
  },
];

const Contact: React.FC = () => {
  return (
    <div className='my-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
          <div className='flex flex-col justify-center px-5 md:px-20 my-8'>
            {contactItems.map((item, index) => (
              <div key={index}>
                <Icon title={item.title}>{item.icon}</Icon>
                <div className='my-5'>{item.content}</div>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
    </div>
  );
};

export default Contact;
