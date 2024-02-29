'use client';

import React from 'react';
import { IconType } from 'react-icons';

interface CategoryInputProps {
  onClick: (value: string) => void;
  selected: boolean;
  label: string;
  icon: IconType;
}
const CategoryInput = ({
  onClick,
  icon: Icon,
  selected,
  label,
}: CategoryInputProps) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`flex cursor-pointer flex-col gap-3 rounded-xl border-2 p-4 transition hover:border-black ${selected ? 'border-black' : 'border-neutral-200'}`}
    >
      <Icon />
      <div className='font-semibold'> {label}</div>
    </div>
  );
};

export default CategoryInput;
