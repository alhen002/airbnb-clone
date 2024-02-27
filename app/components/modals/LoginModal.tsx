'use client';

import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from '@/app/components/modals/Modal';
import Heading from '@/app/components/Heading';
import Input from '@/app/components/inputs/Input';
import toast from 'react-hot-toast';
import Button from '@/app/components/Button';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    const callback = await signIn('credentials', { ...data, redirect: false });

    if (callback?.ok) {
      loginModal.onClose();
      toast.success('Sucessfully logged in.');
      router.refresh();
    }
    if (callback?.error) {
      toast.error('Invalid');
    }
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome back' subtitle='Login to your account.' />
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        label='Password'
        type='password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className='mt-3 flex flex-col gap-4'>
      <hr />
      <Button
        onClick={() => {}}
        label='Continue with Google'
        outline
        icon={FcGoogle}
      />
      <Button
        onClick={() => {}}
        label='Continue with Github'
        outline
        icon={AiFillGithub}
      />
      <div className='mt-4 text-center font-light text-neutral-500'>
        <div className='flex flex-row items-center justify-center gap-2'>
          <div>Already hav e an account?</div>
          <div
            onClick={loginModal.onClose}
            className='cursor-pointer text-neutral-800 hover:underline'
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login'
      actionLabel='Continue'
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
