import React from 'react';
import me from '../app/avatar.jpg';
import logo from '../app/B.png';

export const name = 'Brayan Mejia Cuenca';
export const avatar = me;
export const Logo = logo;

export const title = () => {
  return (
    <React.Fragment>
      Full-Stack <br /> Software Engineer
    </React.Fragment>
  );
};

export const aboutMe = () => {
  return (
    <React.Fragment>
      Based in the beautiful Bay Area, California, I take pleasure in
      crafting amazing web experiences and delving into the world of software
      development. Passionate about open-source projects and contributing to
      their growth.
    </React.Fragment>
  );
};
