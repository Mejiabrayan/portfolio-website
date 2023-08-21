'use client';

import { FC } from 'react';

interface errorProps {}

const error: FC<errorProps> = ({}) => {
  return (
    <section>
      <p className='text-3xl font-extrabold'> Error 
        <span className='text-2xl font-bold'> 404 </span>
      </p>
    </section>
  );
};

export default error;
