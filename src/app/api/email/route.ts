import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import WelcomeEmail from '../../../../email/Welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { firstName, email } = await request.json();
  await resend.emails.send({
    from: 'mejiabrayan@protonmail.com',
    to: email,
    subject: 'Hello, Friend 👋',
    react: WelcomeEmail({
      firstName,
      
    }),
    text: `Hi ${firstName}, thank you for reaching out! 🎉  I will be in touch soon.`,
  });

  return NextResponse.json({
    status: 'ok',
  });
}
