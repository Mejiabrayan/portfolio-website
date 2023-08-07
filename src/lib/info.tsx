import React from 'react';
import profile from '../../public/images/profile_image.png';
import logo from '../app/B.png';
import Link from 'next/link';

export const name = 'Brayan Mejia Cuenca';
export const avatar = profile;
export const Logo = logo;

export const title = () => {
  return <React.Fragment>Crafting Digital Wonders on the Web</React.Fragment>;
};

export const role = () => {
  return <React.Fragment>Full-Stack Software Engineer</React.Fragment>;
};

export const aboutMe = () => {
  return (
    <React.Fragment>
      Based in the Bay Area, I love to build things on the web. These days
      I&apos;m finding my path as a developer and learning new things every day.
      I&apos;ve come to love building things with React, Next.js, and Tailwind
      CSS. I&apos;m currently building my first Saas product,{' '}
      <Link href='https://logoaicreator.com/welcome'>
        <span className='underline'>LogoAICreator</span>
      </Link>
      , a logo maker that uses AI to generate logos.
    </React.Fragment>
  );
};
