import React from 'react';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { name } from '@/lib/info';

interface CardProps {
  title: string;
  content: string;
  link: string;
  icon: React.ReactNode;
}

const Card = ({ title, content, link, icon }: CardProps) => {
  return (
    <div className='card-container relative shadow-md rounded-lg mb-4'>
      <Link href={link} passHref className='card-link group hover:unique'>
        <h2 className='card-title font-heading xxs:text-lg text-center md:text-2xl lg:text-xl lg:text-left mb-6 group hover:gradient-text'>
          <Balancer>{icon}</Balancer>
        </h2>
      </Link>
      <div className='card-meta flex xxs:justify-center sm:justify-center md:justify-start items-center gap-2 text-gray-500 mb-2'>
        <span className='text-sm'>{title}</span>
      </div>
      <div className='card-content mt-2 text-gray-400 text-center md:text-base lg:text-left mb-6 xxs:text-xs tracking-tighter'>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
