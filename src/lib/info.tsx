import React from 'react';
import me from '../app/avatar.jpg';
import logo from '../app/B.png';

export const name = 'Brayan Mejia Cuenca';
export const avatar = me;
export const Logo = logo;

export const title = () => {
  return (
    <React.Fragment>
      Web Designer  /<br/> Developer
    </React.Fragment>
  );
};

export const aboutMe = () => {
  return (
    <React.Fragment>
      Based in the Bay Area, I love to build things on the web. These days I&apos;m working on freelance projects and contributing to open source.
    </React.Fragment>
  );
};
