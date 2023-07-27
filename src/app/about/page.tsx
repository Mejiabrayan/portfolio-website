'use client'
import GradientBlur from '@/components/GradientBlur';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Balancer from 'react-wrap-balancer';

// Function to generate a random number between min and max
function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const AnimatedShape = () => {
  return (
    <motion.div
      initial={{ scale: 1, rotate: 0 }}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, getRandomNumber(180, 360), 0],
        backgroundColor: [
          '#2e1212', // Red
          '#b0a992', // Yellow
          '#d2d2d2', // Blue
        ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'mirror', // Instead of loop, we use "mirror" to reverse the animation on each repeat
        ease: 'easeInOut',
      }}
      className="absolute top-0 right-0 left-48 bottom-0 w-5 h-5 rounded-full"
    />
  );
};

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen">
      <GradientBlur />
      <div className="container px-4 w-full">
        <h1 className="relative font-heading text-7xl font-extrabold md:text-left lg:text-left sm:text-center">
          About
          <AnimatedShape />
        </h1>
        <h3 className="font-heading tracking-tight text-base font-extrabold md:text-left lg:text-left sm:text-center text-zinc-400 py-2">
          {' '}
          Author: Brayan Mejia Cuenca{' '}
        </h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className={cn(
            'body leading-relaxed -tracking-tighter font-medium max-w-md lg:max-w-xl sm:text-center lg:text-left mb-6 sm:text-base text-zinc-300'
          )}
        >
          <Balancer>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            culpa dolores laboriosam dolor provident excepturi sit
            necessitatibus esse non aspernatur? Lorem ipsum dolor sit amet
            consectetur adipisicing Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae aspernatur omnis fugiat enim sapiente,
            libero perferendis rerum fuga, sit minima beatae excepturi esse
            saepe cum odit aliquid earum dolore. Minima, officia. Dolores iste
            exercitationem nihil eaque ullam commodi aliquid eveniet, magni
            accusantium aspernatur, modi sed corporis optio cumque pariatur
            aperiam quam distinctio quos! Illum, repellat molestiae beatae
            quidem autem, assumenda, cumque esse pariatur placeat omnis sequi
            molestias sed. Provident tempora accusamus minima ab enim facilis
            distinctio amet, perspiciatis ea itaque. Exercitationem, doloribus.
            Blanditiis velit harum inventore, labore ratione sint officia,
            adipisci quibusdam amet totam tempore ut quod illo illum sit. elit.
            Culpa dignissimos nihil molestiae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur, minus.
          </Balancer>
        </motion.p>
      </div>
    </section>
  );
};

export default Page;

