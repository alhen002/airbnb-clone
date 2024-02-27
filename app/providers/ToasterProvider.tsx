'use client';
import { Toaster } from 'react-hot-toast';
import { FC } from 'react';

interface ToasterProviderProps {
  children?: React.ReactNode;
}
const ToasterProvider: FC<ToasterProviderProps> = ({ children }) => {
  return <Toaster position='top-right' reverseOrder={false} />;
};

export default ToasterProvider;
