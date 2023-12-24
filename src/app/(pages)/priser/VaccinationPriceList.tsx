import { Reveal } from '../../components/Reveal';

interface vaccinePriceList {
  name: string;
  price: number | string;
  id: number;
}

const vaccinePriceList = [
  { id: 1, name: 'Hepatit A', price: 525 },
  { id: 2, name: 'Hepatit B', price: 495 },
  { id: 3, name: 'Hepatit A + B', price: 690 },
  { id: 4, name: 'Hepatit A + B Barn', price: 550 },
  {
    id: 5,
    name: 'Grundskydd (stelkramp, polio, difteri, kikhosta)',
    price: 590,
  },
  { id: 6, name: 'Tyfoidfeber', price: 475 },
  { id: 7, name: 'Gula febern', price: 1100 },
  { id: 8, name: 'Japansk encefalit', price: 1490 },
  { id: 9, name: 'MeningoKocker', price: 850 },
  { id: 10, name: 'Bältros', price: 2450 },
  { id: 11, name: 'TBE (fästing) Vuxen', price: 470 },
  { id: 12, name: 'TBE Barn', price: 450 },
  { id: 13, name: 'PneumoKocker', price: 450 },
  { id: 14, name: 'Influensa', price: 250 },
  { id: 15, name: 'Kolera (Dukoral)', price: '540' },
];

export default function VaccinationPriceList() {
  return (
    <div>
      <Reveal>
        <div className='items-center flex flex-col'>
          <ul className='md:w-3/4'>
            <li className='flex bg-third rounded-t-lg p-2 text-white'>
              <span className='w-1/2 py-2 px-5 font-bold'>Vaccinationer</span>
              <span className='w-1/2 py-2 px-5 font-bold text-right'>Pris</span>
            </li>
            {vaccinePriceList.map((vaccine) => (
              <li
                key={vaccine.id}
                className={`flex py-2 text-sm md:text-base ${
                  vaccine.id % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                }`}
              >
                <span className='w-2/3 py-2 px-5'>{vaccine.name}</span>
                <span className='w-1/2 py-2 px-5 text-right'>
                  {vaccine.price} kr
                </span>
              </li>
            ))}
            <p className='italic px-8 py-5 text-sm md:text-base md:py-10'>
              Priserna gäller per dos, ej det totala för det rekommenderade
              antalet utan alltid endast en dos
            </p>
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
