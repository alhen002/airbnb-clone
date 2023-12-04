"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "@/app/components/Avatar";
import MenuItem from "@/app/components/navbar/MenuItem";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  currentUser: User | null;
}
function UserMenu({ currentUser }: UserMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={"relative"}>
      <div className={"flex flex-row items-center gap-3"}>
        <div
          onClick={() => {}}
          className={
            "hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          }
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className={
            "p-4 md:py-1 px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          }
        >
          <AiOutlineMenu />
          <div className={"hidden md:block"}>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={
            "absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm"
          }
        >
          <div className={"flex flex-col cursor-pointer"}>
            {currentUser ? (
              <>
                <MenuItem label={"My Trips"} onClick={() => {}} />
                <MenuItem label={"My Favorites"} onClick={() => {}} />
                <MenuItem label={"My Reservations"} onClick={() => {}} />
                <MenuItem label={"Airbnb my home"} onClick={() => {}} />
                <MenuItem label={"Logout"} onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label={"Login"} onClick={loginModal.open} />
                <MenuItem label={"Sign up"} onClick={registerModal.open} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
