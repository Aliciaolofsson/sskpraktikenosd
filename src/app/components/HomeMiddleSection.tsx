import React from 'react';
import InfoCard from './InfoCard';

interface Vaccination {
  text: string;
}

const HomeMiddleSection: React.FC = () => {
  const vaccin: Vaccination[] = [
    { text: 'Vaccinationer inför utlandsresor och rådgivning' },
    { text: 'TBE (fästingburen smitta)' },
    { text: 'Shingrix (bältros)' },
    { text: 'Pneumokocker' },
    { text: 'Influensa' },
  ];
  const projectData = [
    {
      id: 1,
      title: 'Flexibla tider',
      subheader: 'A webbapp',
    },
    {
      id: 2,
      title: 'Professionell service',
      subheader: 'Website',
    },
    {
      id: 3,
      title: 'Expert',
      subheader: 'This portfolio',
    },
  ];

  return (
    <section className='my-12'>
      <div className='flex justify-center items-center'>
        {projectData.map((info) => (
          <InfoCard
            key={info.id}
            title={info.title}
            subheader={info.subheader}
          />
        ))}
      </div>
      <h1 className='text-4xl lg:text-5xl text-center my-14 font-bold'>Vi erbjuder</h1>
      <div className='px-10 lg:px-20 grid lg:grid-cols-2'>
        <div className='flex justify-center flex-col items-center '>
          <h1 className='text-3xl font-bold mb-5'>Vaccinationer</h1>
          <ul className='lg:flex flex-col'>
            {vaccin.map((list, index) => (
              <li className='m-2 flex items-center' key={index}>
                <div className='mr-5'></div>
                {list.text}
              </li>
            ))}
            <h2 className='my-6 px-5'>
              Utförs i samarbete med vår medicinska rådgivare, specialist i
              infektionsmedicin.
            </h2>
          </ul>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-bold mb-5'>Medicinsk Laser</h1>
          <p className='mt-4'>
            De lasrar vi använder är effektiva på smärta och hudproblem. Vi
            behandlar både långvariga och akuta smärtor som t.ex besvär i rygg
            och nacke, stukningar, idrottsskador, hälsporre och tinnitus.
            Hudproblem kan vara svårläkta sår, acne, rosacea och herpes.
          </p>
          <p className='mt-5'>
            Low Level Laser Therapy (LLLT) är ett ofarligt och ytterst rent
            laserljus som stimulerar skadade celler till nybildning i muskler,
            senor och ligament. Ljuset ökar cirkulationen och stärker
            immunförsvaret. Behandlingen minskar smärta, reducerar inflammation
            och främjar läkning.
          </p>
          <h2 className='mt-5'>
            I rådande läge efter Corona pandemin är verksamheten fortfarande
            anpassad så våra kunder ej möts i väntrummet. Gott om tid före och
            efter vaccination.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HomeMiddleSection;
