import { Link } from "lucide-react";
import Paragraph from "./ui/Paragraph";
import Subheading from "./ui/SubHeading";
import LargeHeading from "./ui/LargeHeading";
import { buttonVariants } from "./ui/Button";
import Image from "next/image";

export const Recommended = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <LargeHeading size='sm' className='text-center lg:text-center mt-6'>
        Recommended posts
      </LargeHeading>

      <div className='flex flex-col lg:flex-row justify-center gap-4'>
        <div className='w-full lg:w-1/3'>
          <div className='rounded-lg overflow-hidden'>
            <Image
              src='/images/post4.jpg'
              alt='Picture of a mountain landscape'
              width={400}
              height={250}
              className='object-cover'
            />
          </div>

          <Subheading size='sm' className='mt-2'>
            Hiking in the mountains: a beginners guide
          </Subheading>

          <Paragraph size='sm' className='mt-2'>
            In this post, I share some tips for beginners who want to start
            hiking in the mountains.
          </Paragraph>

          <Link
            href='/posts/mountain-hiking-guide'
            className='btn'
            {...buttonVariants}
          >
            Read more
          </Link>
        </div>

        <div className='w-full lg:w-1/3'>
          <div className='rounded-lg overflow-hidden'>
            <Image
              src='/images/post5.jpg'
              alt='Picture of a person playing guitar'
              width={400}
              height={250}
              className='object-cover'
            />
          </div>

          <Subheading size='sm' className='mt-2'>
            Learning to play the guitar: a beginners guide
          </Subheading>

          <Paragraph size='sm' className='mt-2'>
            In this post, I share some tips for beginners who want to learn to
            play the guitar.
          </Paragraph>

          <Link
            href='/posts/guitar-learning-guide'
            className='btn'
            {...buttonVariants}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
