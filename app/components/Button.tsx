'use client';
import { FC, MouseEvent } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative w-full rounded-lg transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70
      ${outline ? 'bg-white' : 'bg-rose-500'}
      ${outline ? 'border-black' : 'border-rose-500'}
      ${outline ? 'text-black' : 'text-white'}
      ${small ? 'p-1' : 'p-3'}
      ${small ? 'text-sm' : 'text-md'}
      ${small ? 'font-light' : 'font-semibold'}
      ${small ? 'border-[1px]' : 'border-2'}
      `}
    >
      {Icon ? <Icon size={24} className={'absolute left-4 top-3'} /> : null}
      {label}
    </button>
  );
};

export default Button;
