'use client';
import { IconType } from 'react-icons';
import { useRouter, useSearchParams } from 'next/navigation';

interface CategoryBoxProps {
  label: string;
  icon: IconType;
  description: string;
  selected?: boolean;
}
const CategoryBox = ({
  label,
  selected,
  icon: Icon,
  description,
}: CategoryBoxProps) => {
  const router = useRouter();
  const params = useSearchParams();

  return (
    <div
      className={`flex cursor-pointer flex-col items-center justify-center gap-2 border-b-2 p-3 transition hover:text-neutral-800 ${selected ? 'border-b-neutral-800 text-neutral-800' : 'border-transparent text-neutral-500'}`}
    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
  );
};

export default CategoryBox;
