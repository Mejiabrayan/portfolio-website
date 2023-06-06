import { getBlog } from '../../../../sanity/schemas/sanity-utils';
import LargeHeading from '@/components/ui/LargeHeading';
import { PortableText } from '@portabletext/react';
import Balancer from 'react-wrap-balancer';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import { typewriter } from '@/lib/staticImages';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

// const CodeBlock = ({ children }) => (
//   <pre className='bg-gray-100 p-4 rounded-md overflow-auto'>
//     <code className='text-gray-800'>{children}</code>
//   </pre>
// );

type Props = {
  params: {
    blog: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const slug = params.blog;

  const blog = await getBlog(slug);

  return {
    title: blog.title,
  };
}

export default async function Blog({ params }: Props) {
  const slug = params.blog;

  const blog = await getBlog(slug);

  const formatDate = (date: string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US');
  };

  return (
    <section className='px-4 py-12 mx-auto max-w-screen-md sm:bg-gray-910 sm:bg-opacity-50 text-center'>
      <div className='relative h-96 rounded-lg overflow-hidden shadow-md mb-8'>
        <Image
          src={typewriter}
          alt={blog.title}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
      </div>

      <div className='text-center'>
        <LargeHeading size='md'><Balancer>{blog.title}</Balancer></LargeHeading>
      </div>

      <div className='flex flex-col items-center text-gray-400 text-sm my-8'>
        <div className='text-center'>
          <div>by {blog.author}</div>
          <div>{formatDate(blog.date)}</div>
        </div>
      </div>

      <div
        className={cn(
          'prose max-w-none tracking-wide',
          openSans.className,
          'text-center'
        )}
      >
        <PortableText
          value={blog.content}
          // components={{
          //   types: {
          //     code: CodeBlock,
          //   },
          // }}
        />
      </div>

      <div className='text-center my-8'>
        <Link href='/blogs'>Back to Blog</Link>
      </div>
    </section>
  );
}
