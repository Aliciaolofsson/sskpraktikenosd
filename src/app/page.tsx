import BulletList from './components/BulletList';
import Image from 'next/image';

interface Home {
  text: string;
}

const Home: React.FunctionComponent = () => {
  const vaccin = [
    { text: 'Vaccinationer inför utlandsresor och rådgivning' },
    { text: 'TBE (fästingburen smitta)' },
    { text: 'Shingrix (bältros)' },
    { text: 'Pneumokocker' },
    { text: 'Influensa' },
  ];

  return (
    <div>
      <section className='lg:grid grid-cols-2 bg-primary p-12 items-center sm:p-16 '>
        <div className='text-text font-bold p-4 lg:pt-32 text-5xl'>
          <h2 className='py-4'>Kunskap och säkerhet</h2>
          <h2 className=' text-third'>i trygg miljö</h2>
          <p className='text-lg font-normal text-thirdDark mt-12 sm:mr-0 lg:mr-32'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className='mt-12 text-xl bg-secondary font-semibold p-4 rounded-lg hover:bg-thirdDarker'>
            Boka tid
          </button>
        </div>
        <div className='bg-secondary h-3/4'>
        </div>
      </section>
      <section className='flex justify-center py-16'>
        <h1 className='text-5xl font-bold'>Vi erbjuder</h1>
      </section>

      <section className='px-20'>
        <h1 className='text-3xl font-medium  p-4'>Vaccinationer</h1>
        <ul className='lg:flex flex-col text-lg '>
          {vaccin.map((list, index) => (
            <li className='m-2 flex items-center' key={index}>
              <div className='mr-5'>
                <BulletList />
              </div>
              {list.text}
            </li>
          ))}
        </ul>
        <h2>
          Utförs i samarbete med vår medicinska rådgivare, specialist i
          infektionsmedicin.
        </h2>
      </section>
      <section className='p-20'>
        <h1 className='text-3xl font-bold'>Medicinsk Laser</h1>
        <p>
          De lasrar vi använder är effektiva på smärta och hudproblem. Vi
          behandlar både långvariga och akuta smärtor som t.ex besvär i rygg och
          nacke, stukningar, idrottsskador, hälsporre och tinnitus. Hudproblem
          kan vara svårläkta sår, acne, rosacea och herpes.
        </p>
        <p>
          Low Level Laser Therapy (LLLT) är ett ofarligt och ytterst rent
          laserljus som stimulerar skadade celler till nybildning i muskler,
          senor och ligament. Ljuset ökar cirkulationen och stärker
          immunförsvaret. Behandlingen minskar smärta, reducerar inflammation
          och främjar läkning.
        </p>
        <h2>
          I rådande läge efter Corona pandemin är verksamheten fortfarande
          anpassad så våra kunder ej möts i väntrummet. Gott om tid före och
          efter vaccination.
        </h2>
      </section>
    </div>
  );
};
export default Home;
