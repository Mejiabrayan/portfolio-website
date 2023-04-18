import LargeHeading from '@/components/ui/LargeHeading';
import LoadingAnimation from '@/components/ui/LoadingAnimation';
import Paragraph from '@/components/ui/Paragraph';

const Loading = () => {
  return (
    <div className='flex flex-col items-center text-center justify-center min-h-screen '>
        
      <LoadingAnimation />
      <div className='mt-6'>
        <LargeHeading size='lg' className='text-gray-100 text-center'>Loading...</LargeHeading>
        <Paragraph className='text-white font-nunito text-sm mt-2' size='sm'>
          Please wait while we load the content
        </Paragraph>
      </div>
    </div>
  );
};

export default Loading;
