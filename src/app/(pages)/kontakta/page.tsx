import ContactForm from '@/app/components/ContactForm';
import IconTitle from '@/app/components/IconTitle';
import IconWrapper from '@/app/components/IconWrapper';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <div>
        <h1 className='text-5xl font-bold text-secondary p-12 lg:p-20 flex justify-center'>Kontakta oss</h1>
      </div>
      <div className='lg:grid grid-cols-2'>
        <div>
          <div className='px-10 lg:px-20 text-lg flex flex-col space-y-6 jusify-center'>
            <section className=''>
              <IconTitle icon={<Phone color='#C1006B' />} title={'Telefon'} />
              <p>Du får tala med oss direkt</p>
              <p>Svarar vi inte så kontaktar vi dig senast dagen därpå</p>
              <li>
                <a href='tel:0705656066'>070 - 56 56 066</a>
              </li>
            </section>
            <section>
              <IconTitle icon={<Mail color='#C1006B' />} title={'Mail'} />
              <p>Maila oss på</p>
              <a
                href='mailto:info@sskpraktiken.se'
                className='font-semibold hover:text-secondary'
              >
                info@sskpraktiken.se
              </a>
            </section>
            <section>
              <IconTitle icon={<Clock color='#C1006B' />} title={'Öppettider'} />
              <p>Anpassas efter ditt behov så långt som möjligt</p>
            </section>
            <section>
              <ul>
                <IconTitle
                  icon={<MapPin color='#C1006B' />}
                  title={'Hitta hit'}
                />
                <li>Hagvägen 18 i Östersund</li>
                <li>Fri parkering utanför mottagningen</li>
              </ul>
            </section>
          </div>
        </div>
        <div className='flex justify-center'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
