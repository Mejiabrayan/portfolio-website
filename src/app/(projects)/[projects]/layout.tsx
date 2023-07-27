
import { ReactNode, Suspense } from 'react';
import Loading from './[project]/loading';
export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <section className='relative min-h-screen'>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </section>
  );
}
