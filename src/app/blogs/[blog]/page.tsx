import Image from 'next/image';
import { getBlog } from '../../../../sanity/schemas/sanity-utils';
import LargeHeading from '@/components/ui/LargeHeading';
import { PortableText } from '@portabletext/react';
import Balancer from 'react-wrap-balancer';
import Paragraph from '@/components/ui/Paragraph';

type Props = {
  params: {
    blog: string;
  };
};

export default async function Blog({ params }: Props) {
  const slug = params.blog;

  const blog = await getBlog(slug);

  const formatDate = (date: string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US');
  };

  return (
    <section className='px-4 py-12 mx-auto max-w-screen-md  sm:bg-gray-910 sm:bg-opacity-70'>
      <div className='relative h-96 rounded-lg overflow-hidden shadow-md mb-8'>
        <Image
          src={blog.image}
          alt={blog.title}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <LargeHeading size='new' className='mb-4'>
        <Balancer className='text-center'>
        {blog.title}
        </Balancer>
      </LargeHeading>

      <div className='flex justify-between text-gray-400 text-sm mb-8'>
        <div>by {blog.author}</div>
        <div>{formatDate(blog.date)}</div>
      </div>

      <div className='prose max-w-none tracking-wide'>
        <PortableText value={blog.content} />
      </div>

      <Paragraph size='sm' className='text-center my-8'>
        <a href='/blogs'>Back to Blog</a>
      </Paragraph>
    </section>
  );
}
