'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '@/app/components/Avatar';
import { useCallback, useState } from 'react';
import MenuItem from '@/app/components/navbar/MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => {}}
          className='hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block'
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className='flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4'>
          <div className='flex cursor-pointer flex-col'>
            <>
              <MenuItem onClick={loginModal.onOpen} label='Login' />
              <MenuItem onClick={registerModal.onOpen} label='Sign Up' />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
