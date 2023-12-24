'use client';
import Image from 'next/image';
import HomeMiddleSection from './components/HomeMiddleSection';
import Link from 'next/link';
import { Reveal } from './components/Reveal';
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
    <main>
      <Reveal>
        <div>
          <header className='px-6 grid grid-cols-1 items-center md:grid-cols-2 gap-4 xl:mx-20'>
            <div className='font-bold p-4'>
              <h2 className='py-4 text-4xl md:text-5xl'>
                Kunskap och säkerhet <br />
                <span className=' text-secondary'>i trygg miljö</span>
              </h2>
              <p className='text-lg font-medium mt-6 sm:mr-0 lg:mr-32'>
                Vi är legitimerade sjuksköterskor med lång erfarenhet inom
                allmän hälso- och sjukvård. Utbildade i vaccinationer och
                resemedicin samt innehar certifiering i laserterapi.
                SjuksköterskePraktiken är ett komplement till hälsocentraler och
                andra mottagningar inom Regionen. Vi har kompetens att bedöma om
                något behöver behandlas på högre vårdnivå.
              </p>
              <Link href={'/kontakta'}>
                <button className='button mt-12 text-xl bg-secondary text-white font-semibold p-3 px-5 rounded-lg hover:bg-third'>
                  Boka tid
                </button>
              </Link>
            </div>
            <Image
              className='hidden md:block'
              src={'/blob.svg'}
              width={600}
              height={600}
              alt={'blob'}
            ></Image>
          </header>
        </div></Reveal>
        <div>
          <HomeMiddleSection />
        </div>
    </main>
  );
};
export default Home;
