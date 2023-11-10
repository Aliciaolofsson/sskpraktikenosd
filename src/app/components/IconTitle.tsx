import React, { ReactElement } from 'react';
import IconWrapper from './IconWrapper';

interface IconProps {
  icon: ReactElement;
  title: String;
}

const IconTitle: React.FC<IconProps> = ({ icon, title }) => {
  return (
    <div className='flex items-center my-6'>
      <IconWrapper icon={icon} />
      <h1 className='mx-2 text-2xl font-semibold'>{title}</h1>
    </div>
  );
};

export default IconTitle;
