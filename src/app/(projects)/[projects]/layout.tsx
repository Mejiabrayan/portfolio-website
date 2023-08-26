import React from 'react';

import Loading from './loading';

import { ReactNode, Suspense } from 'react';
export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <section className='relative min-h-screen'>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
}
