import Image from 'next/image';
import { Inter, Nunito, Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import LargeHeading from '@/components/ui/LargeHeading';
import { Metadata } from 'next';
import Paragraph from '@/components/ui/Paragraph';
import { buttonVariants } from '@/components/ui/Button';
import AvatarDemo from '@/components/Avatar';
import Subheading from '@/components/ui/SubHeading';
import SeparatorDemo from '@/components/ui/Separator';

const inter = Inter({ subsets: ['latin'] });
const nunito = Nunito({ subsets: ['latin'] });
const playFair = Playfair_Display({ subsets: ['latin'] });

export default function Article() {
  return (
    <div className='min-h-screen max-w-2xl flex items-center overflow-x-hidden bg-gray-910'>
      <div className='container pt-30 px-6 min-h-full w-full mx-auto'>
        {/* Add your article content here */}
      </div>
    </div>
  );
}
