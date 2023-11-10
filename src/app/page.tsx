import Image from 'next/image';
import HomeMiddleSection from './components/HomeMiddleSection';

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
      <header className='px-6 grid grid-cols-1 items-center md:grid-cols-2 gap-4 xl:mx-20'>
        <div className='font-bold p-4 text-5xl'>
          <h2 className='py-4'>
            Kunskap och säkerhet <br />
            <span className=' text-secondary'>i trygg miljö</span>
          </h2>
          <p className='text-lg font-medium mt-6 sm:mr-0 lg:mr-32'>
            Vi är legitimerade sjuksköterskor med lång erfarenhet inom allmän
            hälso- och sjukvård. Utbildade i vaccinationer och resemedicin samt
            innehar certifiering i laserterapi. SjuksköterskePraktiken är ett
            komplement till hälsocentraler och andra mottagningar inom Regionen.
            Vi har kompetens att bedöma om något behöver behandlas på högre
            vårdnivå.
          </p>
          <button className='mt-12 text-xl bg-secondary text-white font-semibold p-3 px-5 rounded-lg hover:bg-thirdDarker'>
            Boka tid
          </button>
        </div>
        <Image
          className='hidden md:block'
          src={'/blob.svg'}
          width={600}
          height={600}
          alt={'blob'}
        ></Image>
      </header>
      <div>
          <HomeMiddleSection />
        </div>
    </main>
  );
};
export default Home;
