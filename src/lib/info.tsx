import React from 'react';
import me from '../app/avatar.jpg';
import logo from '../app/B.png'

export const name = 'Brayan Mejia Cuenca';
export const avatar = me;
export const Logo = logo;


export const title = () => {
  return (
    <React.Fragment>
      Full-Stack <br/> Software Engineer
    </React.Fragment>
  );
};

export const aboutMe = () => {
  return (
    <React.Fragment>
      Based in the Bay Area California, I am passionate about the React
      Ecosystem, the future of the web, and the open-source community. I am a
      self-taught developer who loves to learn new technologies and share my
      knowledge with others.
    </React.Fragment>
  );
};
