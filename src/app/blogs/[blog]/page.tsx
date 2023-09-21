import { getBlog } from '../../../../sanity/schemas/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

import { CustomPortableTextComponent, components } from '@/components/CodeBlock';

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
    <section className='grid grid-cols-[2fr_1fr] py-6 sm:py-12 gap-6 sm:gap-12'>
      <div className='text-gray-300 text-base leading-[150%] self-start sm:self-end'>
        <Image
          className='w-full rounded-lg'
          src={blog.image}
          alt='Picture of the author'
          width={500}
          height={500}
          placeholder='blur'
          blurDataURL={blog.image}
        />
        <p className='mt-2 sm:mt-4 text-center sm:text-left'>
          <span className='block text-zinc-400'>By {blog.author}</span>
          <span className='block text-zinc-400'>on {formatDate(blog.date)}</span>
        </p>
      </div>
      <h1 className='text-zinc-300 text-2xl xxs:text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight'>
        {blog.title}
      </h1>
      <div className='col-span-2'>
        <div className='text-zinc-300 xxs:text-xs lg:text-base leading-[150%]'>
          <PortableText
            components={CustomPortableTextComponent}
            // onMissingComponent={(type, props) => {
            //   if (type === 'block') {
            //     return <p>{props.children}</p>;
            //   }
            //   return null;
            // }}
            
            value={blog.content}
            listNestingMode='html'
            key={blog._id}
          />
        </div>
      </div>
    </section>
  );
}
