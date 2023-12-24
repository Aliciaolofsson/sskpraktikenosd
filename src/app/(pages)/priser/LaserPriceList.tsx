import { Reveal } from '../../components/Reveal';

interface laserList {
  name: string;
  price: number | string;
  id: number;
}

const laserList = [
  { id: 201, name: 'Första laserbehandlingen', price: '650' },
  {
    id: 202,
    name: 'Följande behandlingar',
    price: '500',
  },
];

export default function LaserPriceList() {
  return (
    <div>
      <Reveal>
        <div>
          <ul>
            <li className='flex bg-third rounded-t-lg p-2 text-white'>
              <span className='w-1/2 py-2 px-5 flex bg-third rounded-t-lg p-2 font-semibold'>
                Laser
              </span>
              <span className='w-1/2 py-2 px-5 font-bold text-right'>Pris</span>
            </li>
            {laserList.map((laser) => (
              <li
                key={laser.id}
                className={`flex py-2 text-sm md:text-base ${
                  laser.id % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                }`}
              >
                <span className='w-2/3 pt-2 px-5'>{laser.name}</span>
                <span className='w-1/2 pt-2 px-5 text-right'>
                  {laser.price} kr
                </span>
              </li>
            ))}
            <p className='pr-36 px-5 pb-5 text-sm italic bg-gray-100'>
              eller enligt överenskommelse beronde på tidsåtgång
            </p>
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
