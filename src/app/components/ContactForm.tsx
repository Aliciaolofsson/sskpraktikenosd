'use client';
import { useState, FormEvent } from 'react';
import Image from 'next/image';
interface EmailSection {
  cols: number;
  rows: number;
}

export default function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      title: { value: string };
      message: { value: string };
    };
    const data = {
      email: target.email.value,
      title: target.title.value,
      message: target.message.value,
    };

    const JSONdata = JSON.stringify(data);
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

  return (
      <div className='flex items-center flex-col justify-center mx-5 xl:mx-24 py-12 rounded-xl bg-third '>
        <h1 className='font-bold text-xl mb-10 text-white'>Maila oss direkt!</h1>
        <form className='flex flex-col font-semibold  gap-2 w-3/4 text-white' onSubmit={handleSubmit}>
          <label htmlFor='email' className='block'>
            Namn:
          </label>
          <input
            type='string'
            id='name'
            required
            className='p-2 rounded-lg'
          />
          <label htmlFor='email' className='block'>
            Email adress:
          </label>
          <input
            type='email'
            id='email'
            required
            className='p-2 rounded-lg'
          />
          <label htmlFor='title' className='block'>
            Ämne:
          </label>
          <input
            type='text'
            id='title'
            required
            className='p-2 rounded-lg'
          />
          <label htmlFor='message'>Meddelande:</label>
          <textarea
            name='message'
            id='message'
            className='rounded-lg p-2'
            cols={10}
            rows={6}
          ></textarea>
          <button
            type='submit'
            className='mt-3 bg-thirdDark text-white rounded-md p-3 text-sm hover:bg-white hover:text-thirdDark'
          >
Skicka meddelande          </button>
          {emailSubmitted && (
            <p className='text-xs mt-2 italic'>Skickat!</p>
          )}
        </form>
      </div>
  );
}
