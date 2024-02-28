'use client';
import { IconType } from 'react-icons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
interface CategoryBoxProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}
const CategoryBox = ({ label, selected, icon: Icon }: CategoryBoxProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleClick = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    if (params.get('category') === label) {
      params.delete('category');
      router.replace(`${pathname}?${params.toString()}`);
    } else {
      params.set('category', label);
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [searchParams, router, label]);

  return (
    <div
      onClick={handleClick}
      className={`flex cursor-pointer flex-col items-center justify-center gap-2 border-b-2 p-3 transition hover:text-neutral-800 ${selected ? 'border-b-neutral-800 text-neutral-800' : 'border-transparent text-neutral-500'}`}
    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
  );
};

export default CategoryBox;
