import { ReactNode, Suspense } from 'react';
import Loading from './loading';
export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <section className='bg-gray-900 w-full min-h-screen'>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
}
