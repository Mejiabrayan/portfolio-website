import type { ReactNode } from 'react';
export default function Layout({ children }: { children: ReactNode }) {
  return <section className='min-h-screen'>{children}</section>;
}
