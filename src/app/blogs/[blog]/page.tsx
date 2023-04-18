import Image from 'next/image';
import { getBlog } from '../../../../sanity/schemas/sanity-utils';
import LargeHeading from '@/components/ui/LargeHeading';
import { PortableText } from '@portabletext/react';

type Props = {
  params: {
    blog: string;
  };
};

export default async function Blog({ params }: Props) {
  const slug = params.blog;

  const blog = await getBlog(slug);
  return (
    <section className='flex flex-col items-center justify-center py-16'>
      <div className='relative w-80 h-80 rounded-lg overflow-hidden shadow-md mb-8'>
        <Image
          src={blog.image}
          alt={blog.title}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <LargeHeading size='new' className='text-center'>
        {blog.title}
      </LargeHeading>
      <div className='prose max-w-3xl mt-8 tracking-wide'>
        <PortableText value={blog.content} />
      </div>
    </section>
  );
}
