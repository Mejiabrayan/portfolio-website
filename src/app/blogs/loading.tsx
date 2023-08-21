import { Skeleton } from '@/components/skeleton';
import React from 'react';
import { FC } from 'react';

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <React.Fragment>
      <Skeleton className='h-4 w-1/4 bg-white' />
    </React.Fragment>
  );
};

export default loading;
