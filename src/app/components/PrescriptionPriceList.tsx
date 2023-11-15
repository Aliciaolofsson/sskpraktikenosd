interface prescriptionList {
  name: string;
  price: number | string;
  id: number;
}

const prescriptionList = [
  { id: 101, name: 'Recept', price: '300' },
  { id: 102, name: 'Recept i samband med vaccination', price: '200' },
  {
    id: 103,
    name: 'Endast genomgång av tidigare vaccinationer',
    price: '200',
  },
];

export default function PrescriptionPriceList() {
  return (
    <div>
      <ul>
        <li className='flex bg-third rounded-t-lg p-2 text-white'>
          <span className='w-1/2 py-2 px-5 flex bg-third rounded-t-lg p-2 font-semibold'>
            Recept
          </span>
          <span className='w-1/2 py-2 px-5 font-bold text-right'>Pris</span>
        </li>
        {prescriptionList.map((prescription) => (
          <li
            key={prescription.id}
            className={`flex py-2 text-sm md:text-base ${
              prescription.id % 2 === 0 ? 'bg-white' : 'bg-gray-100'
            }`}
          >
            <span className='w-2/3 py-2 px-5'>{prescription.name}</span>
            <span className='w-1/2 py-2 px-5 text-right'>
              {prescription.price} kr
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
