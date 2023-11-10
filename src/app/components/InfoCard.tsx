import { Code, Eye } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  subheader: string;
}

export default function InfoCard({ title, subheader }: ProjectCardProps) {
  return (
    <div className='flex flex-col justify-center items-center mx-6 lg:mx-20'>
        <h5 className='font-xl font-semibold my-2'>{title}</h5>
        <p className='italic mt-2 text-sm'>{subheader}</p>
    </div>
  );
}
