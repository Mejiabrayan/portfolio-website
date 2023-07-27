'use client'
import { FC } from 'react';
import { motion } from 'framer-motion';

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <section className="relative flex items-center w-full">
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="relative flex-col items-start m-auto align-middle">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            {/* Left Column */}
            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div className="max-w-xl text-center lg:text-left">
                {/* Project Name */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-200 h-12 w-64 animate-pulse rounded"
                ></motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gray-200 h-16 w-full animate-pulse rounded mt-4"
                ></motion.div>
              </div>

            
            </div>

            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-200 h-96 w-full animate-pulse rounded"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
