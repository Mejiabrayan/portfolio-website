import { ReactNode, Suspense } from 'react';
export default function ProjectLayout({ children }: { children: ReactNode }) {
  return <section className='relative min-h-screen'>{children}</section>;
}
