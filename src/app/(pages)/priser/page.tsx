import React from 'react';

const vaccinePriceList = [
  { name: 'Hepatit A', price: 525 },
  { name: 'Hepatit B', price: 495 },
  { name: 'Hepatit A + B', price: 690 },
  { name: 'Hepatit A + B Barn', price: 550 },
  { name: 'Grundskydd (stelkramp, polio, difteri, kikhosta)', price: 590 },
  { name: 'Tyfoidfeber', price: 475 },
  { name: 'Gula febern', price: 1100 },
  { name: 'Japansk encefalit', price: 1490 },
  { name: 'MeningoKocker', price: 850 },
  { name: 'Bältros', price: 2450 },
  { name: 'TBE (fästing) Vuxen', price: 470 },
  { name: 'TBE Barn', price: 450 },
  { name: 'PneumoKocker', price: 450 },
  { name: 'Influensa', price: 250 },
  { name: 'Kolera (Dukoral)', price: 540 },
];

export default function Price() {
  return (
    <div>
      <div className='flex flex-col items-center my-20'>
        <ul className='grid grid-col-2 space-y-7'>
         
        </ul>
      </div>
      <section className='vac-info'>
        <p>
          Priserna gäller per dos, ej det totala för det rekommenderade antalet
          utan alltid endast en dos
        </p>
        <ul>
          <li>Recept 300 kr</li>
          <li>Recept i samband med vaccination 200 kr</li>
          <li>Endast genomgång av tidigare vaccinationer 200 kr</li>
        </ul>
        <h2>Uteblivet besök</h2>
        <p>Debiteras med 200 kr</p>
      </section>
      <section>
        <h1>Laser</h1>
        <ul>
          <li>Första laserbehandlingen: 650 kr</li>
          <li>
            Följande behandlingar: 500 kr eller enligt överenskommelse beroende
            på tidsåtgång
          </li>
        </ul>
      </section>
      <section>
        <h1>Hembesök</h1>
        <li>Hembesök kan göras enligt överenskommelse</li>
      </section>
    </div>
  );
}
