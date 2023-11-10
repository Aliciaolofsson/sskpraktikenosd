
import { ReactElement } from 'react';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@/app/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, title, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Alicia Olofsson <hello@aliciaolofsson.com>',
      to: ['alicia-olofsson@hotmail.com'],
      subject: 'New message from sskpraktiken.com',
      react: EmailTemplate({
        sender: email,
        title: title,
        message: message,
      }) as ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
