import type { ReactNode } from 'react';
export default function Layout({ children }: { children: ReactNode }) {
  return <section className='relative min-h-screen px-56 my-28 '>{children}</section>;
}
