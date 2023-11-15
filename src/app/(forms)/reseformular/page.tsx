'use client';

import { FormEvent, useState } from 'react';

interface Question {
  label: string;
  name: string;
  type: string;
  options?: string[];
  textAreaOnYes?: boolean;
  onYesPlaceholder?: string;
  textPlaceholder?: string;
}

interface OtherForm {
  cols: any;
  rows: any;
}

const questions: Question[] = [
  { label: 'För- och efternamn *', name: 'name', type: 'text' },
  { label: 'Födelsedatum *', name: 'birthYear', type: 'date' },
  { label: 'Telefonnummer *', name: 'phoneNumber', type: 'tel' },
  { label: 'Email adress', name: 'email', type: 'email' },
  {
    label: 'Vart ska du resa? *',
    name: 'whereToTravel',
    type: 'text',
    textPlaceholder: 'Ange land, område och ort...',
  },
  {
    label: 'Hur länge? *',
    name: 'howLong',
    type: 'text',
  },
  {
    label: 'Avresedatum *',
    name: 'departureDate',
    type: 'text',
  },
  {
    label: 'Vad är syftet med resan *',
    name: 'purposeOfTravel',
    type: 'textarea',
  },
  { label: 'Vad väger du? (kg) *', name: 'weight', type: 'number' },
  {
    label:
      'Behandlas Du med kortison eller får cellgiftsbehandling eller magsårsmedicin?',
    name: 'medication',
    type: 'radio',
    options: ['Nej', 'Ja'],
    textAreaOnYes: true,
    onYesPlaceholder: 'vilken medicin',
  },
  {
    label:
      'Har Du någon långvarig eller allvarlig sjukdom, såsom diabetes, svår njur- eller hjärtsjukdom, epilepsi, psoriasis, inflammatorisk tarmsjukdom, långvarig ledsvullnad etc.? *',
    name: 'seriousIllness',
    type: 'radio',
    options: ['Nej', 'Ja'],
    textAreaOnYes: true,
    onYesPlaceholder: 'vilken sjukdom',
  },
  {
    label:
      'Behandlas Du med blodförtunnande läkemedel, litium eller hjärtmedicin?',
    name: 'bloodThinner',
    type: 'radio',
    options: ['Nej', 'Ja'],
    textAreaOnYes: true,
    onYesPlaceholder: 'vilken medicin',
  },
  {
    label: 'Tål Du att äta ägg? * ',
    name: 'eatEgg',
    type: 'radio',
    options: ['Nej', 'Ja'],
  },
  {
    label:
      'Har Du råkat ut för någon biverkan av tidigare vaccinationer eller reagerat ogynnsamt (svimmat, blivit yr, märkt andnöd eller utslag)? *',
    name: 'vaccineReaction',
    type: 'radio',
    options: ['Nej', 'Ja'],
    textAreaOnYes: true,
    onYesPlaceholder: 'på vilket sätt',
  },
  {
    label: 'Är mjälten bortopererad? *',
    name: 'spleenRemoved',
    type: 'radio',
    options: ['Nej', 'Ja'],
  },
  {
    label: 'Är Du gravid? *',
    name: 'isPregnant',
    type: 'radio',
    options: ['Nej', 'Ja'],
  },
  {
    label: 'Planerar Du att bli gravid den närmaste tiden? *',
    name: 'planningPregnancy',
    type: 'radio',
    options: ['Nej', 'Ja'],
  },
  { label: 'Övriga upplysningar', name: 'additionalInfo', type: 'textarea' },
];

interface FormData {
  [key: string]: string;
}

export default function TravelForm() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const JSONdata = JSON.stringify(formData);
    const endpoint = '/api/send';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log('Message sent.');
      setEmailSubmitted(true);
    }
  };

  const renderJaTextarea = (question: Question) => (
    <textarea
      className='mt-3 border-2 border-third'
      onChange={handleChange}
      required
      placeholder={`Skriv ${question.onYesPlaceholder}...`}
      rows={4}
      cols={40}
    />
  );

  return (
    <div className='mt-20 mx-2 md:mx-12 flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold text-center'>Rese vaccinationer</h1>
      <form
        className='flex flex-col gap-2 md:w-3/5 lg:w-2/5 p-12 '
        onSubmit={handleSubmit}
      >
        {questions.map((question) => (
          <div className='flex flex-col' key={question.name}>
            <label className='my-2 font-semibold'>{question.label}</label>
            {question.type === 'text' ||
            question.type === 'email' ||
            question.type === 'number' ||
            question.type === 'tel' ||
            question.type === 'date' ? (
              <input
                className='border-2 border-third'
                type={question.type}
                name={question.name}
                value={formData[question.name] || ''}
                onChange={handleChange}
                required={question.label.includes('*')}
                placeholder={question.textPlaceholder}
              />
            ) : question.type === 'textarea' ? (
              <textarea
                name={question.name}
                value={formData[question.name] || ''}
                onChange={handleChange}
                required={question.label.includes('*')}
                placeholder='Skriv här...'
                rows={4}
                className='border-2 border-third'
              />
            ) : (
              question.type === 'radio' &&
              question.options?.map((option) => (
                <div key={option}>
                  <input
                    className='h-4 w-4 mr-2'
                    type='radio'
                    name={question.name}
                    value={option}
                    onChange={handleChange}
                    checked={formData[question.name] === option}
                    required={question.label.includes('*')}
                  />
                  <label>{option}</label>
                  <div>
                    {question?.textAreaOnYes &&
                      formData[question.name]?.startsWith('Ja') &&
                      formData[question.name] === option &&
                      renderJaTextarea(question)}
                  </div>
                </div>
              ))
            )}
          </div>
        ))}
        <button
          className='bg-third p-2 my-5 rounded-lg font-semibold text-white hover:bg-thirdDark'
          type='submit'
        >
          Submit
        </button>
        {emailSubmitted && (
            <p className='text-xs mt-2 italic text-green-400'>Formulär skickat!</p>
          )}
      </form>
    </div>
  );
}
