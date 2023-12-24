'use client';
import LaserPriceList from '@/app/(pages)/priser/LaserPriceList';
import PrescriptionPriceList from '@/app/(pages)/priser/PrescriptionPriceList';
import TabButton from '@/app/components/TabButton';
import VaccinationPriceList from '@/app/(pages)/priser/VaccinationPriceList';
import { useState, useTransition } from 'react';

interface TAB_DATA {
  content: React.FC;
}
const TAB_DATA = [
  {
    title: 'VaccinationPricing',
    id: 'vaccinationPricing',
    content: <VaccinationPriceList />,
  },
  {
    title: 'PrescriptionPricing',
    id: 'prescriptionPricing',
    content: <PrescriptionPriceList />,
  },
  {
    title: 'LaserPricing',
    id: 'laserPricing',
    content: <LaserPriceList />,
  },
];

export default function Price() {
  const [tab, setTab] = useState('vaccinationPricing');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <div>
      <div className='flex items-center flex-col p-5'>
        <h1 className='text-4xl font-bold my-12'>Priser för våra tjänster</h1>
        <div className='flex'>
          <TabButton
            active={tab === 'vaccinationPricing'}
            selectTab={() => handleTabChange('vaccinationPricing')}
          >
            Vaccin
          </TabButton>
          <TabButton
            active={tab === 'prescriptionPricing'}
            selectTab={() => handleTabChange('prescriptionPricing')}
          >
            Recept
          </TabButton>
          <TabButton
            active={tab === 'laserPricing'}
            selectTab={() => handleTabChange('laserPricing')}
          >
            Laser
          </TabButton>
        </div>
        <div className='my-6'>
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </div>
        <section className='my-12'>
          <h1 className='text-2xl font-bold'>Hembesök</h1>
          <li>Hembesök kan göras enligt överenskommelse</li>
          <div className='my-4'>
            <p className='text-sm italic'>
              Uteblivet besök debiteras med 200 kr
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
