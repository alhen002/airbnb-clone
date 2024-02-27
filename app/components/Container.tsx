import { FC, ReactNode } from 'react';
interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='xs:px-4 mx-auto max-w-[2520px] sm:px-2 md:px-10 xl:px-20'>
      {children}
    </div>
  );
};

export default Container;
