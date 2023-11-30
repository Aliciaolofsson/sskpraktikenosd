import { ReactNode } from 'react';

interface IconWrapperProps {
  title: string;
  children: ReactNode;
}

const Icon: React.FC<IconWrapperProps> = ({ title, children }) => {
  return (
    <div className='flex items-center'>
      <div className='rounded-full w-12 h-12 flex items-center justify-center bg-third text-white'>
        {children}
      </div>
      <h2 className='mx-3 text-3xl font-bold'>{title}</h2>
    </div>
  );
};

export default Icon;
