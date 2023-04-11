import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <section className='container py-16 text-center'>
        <div className='mx-auto max-w-7xl'>
          <LargeHeading
            size='sm'
            className='text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl'
          >
            Featured Projects
          </LargeHeading>
          <Paragraph className='mt-4 text-lg text-gray-700 dark:text-gray-200'>
            Here are some of our favorite projects that we have worked on.
          </Paragraph>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            <div className='bg-white shadow-md rounded-lg p-6'>
              <div className='h-20 w-20 bg-gray-200 rounded-md mb-4'></div>
              <h3 className='text-lg font-bold mb-2'>Project Title</h3>
              <p className='text-gray-500 text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className='bg-white shadow-md rounded-lg p-6'>
              <div className='h-20 w-20 bg-gray-200 rounded-md mb-4'></div>
              <h3 className='text-lg font-bold mb-2'>Project Title</h3>
              <p className='text-gray-500 text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className='bg-white shadow-md rounded-lg p-6'>
              <div className='h-20 w-20 bg-gray-200 rounded-md mb-4'></div>
              <h3 className='text-lg font-bold mb-2'>Project Title</h3>
              <p className='text-gray-500 text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className='bg-white shadow-md rounded-lg p-6'>
              <div className='h-20 w-20 bg-gray-200 rounded-md mb-4'></div>
              <h3 className='text-lg font-bold mb-2'>Project Title</h3>
              <p className='text-gray-500 text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className='bg-white shadow-md rounded-lg p-6'>
              <div className='h-20 w-20 bg-gray-200 rounded-md mb-4'></div>
              <h3 className='text-lg font-bold mb-2'>Project Title</h3>
              <p className='text-gray-500 text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
