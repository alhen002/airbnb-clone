"use client";

import React from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "@/app/components/modals/Modal";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/inputs/Input";
import toast from "react-hot-toast";
import Button from "@/app/components/Button";
import { signIn } from "next-auth/react";
function RegisterModal() {
  const registerModal = useRegisterModal();

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: FieldValues) {
    setLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.close();
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const bodyContent = (
    <div className={"flex flex-col gap-4"}>
      <Heading title={"Welcome to Airbnb"} subTitle={"Create an account!"} />
      <Input
        register={register}
        id={"email"}
        label={"Email"}
        disabled={loading}
        required
        errors={errors}
      />
      <Input
        register={register}
        id={"name"}
        label={"Name"}
        disabled={loading}
        required
        errors={errors}
      />
      <Input
        register={register}
        id={"password"}
        type={"password"}
        label={"Password"}
        disabled={loading}
        required
        errors={errors}
      />
    </div>
  );

  const footerContent = (
    <div className={"flex flex-col gap-4 mt-3"}>
      <hr />
      <Button
        label={"Continue with Google"}
        onClick={() => signIn("google")}
        icon={FcGoogle}
        disabled={loading}
        outline
      />
      <Button
        label={"Continue with Github"}
        onClick={() => signIn("github")}
        icon={AiFillGithub}
        disabled={loading}
        outline
      />
      <div className={"text-neutral-500 text-center mt-4 font-light"}>
        <div className={"justify-center flex flex-row items-center gap-2"}>
          <div>Already have an account?</div>
          <div
            className={"text-neutral-800 cursor-pointer hover:underline"}
            onClick={registerModal.close}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={loading}
      isOpen={registerModal.isOpen}
      onClose={registerModal.close}
      title={"Register"}
      actionlabel={"Continue"}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default RegisterModal;
