import Container from '@/app/components/Container';
import Logo from '@/app/components/navbar/Logo';
import Search from '@/app/components/navbar/Search';
import UserMenu from '@/app/components/navbar/UserMenu';
import { User } from '@prisma/client';
import { FC } from 'react';

interface NavBarProps {
  currentUser?: User | null;
}
const Navbar: FC<NavBarProps> = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div className='fixed z-10 w-full bg-white shadow-sm'>
      <div className='border-b-[1px] py-4'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
