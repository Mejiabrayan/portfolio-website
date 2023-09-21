import React from 'react';
import profile from '../../public/images/profile_image.png';
import logo from '../app/B.png';
import Link from 'next/link';

export const name = 'Brayan Mejia Cuenca';
export const avatar = profile;
export const Logo = logo;

export const heading = () => {
  return <React.Fragment>Crafting Digital Wonders on the Web</React.Fragment>;
};

export const title = () => {
  return <React.Fragment>Full-Stack Software Engineer</React.Fragment>;

};
