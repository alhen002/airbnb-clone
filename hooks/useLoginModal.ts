import { create } from "zustand";

interface LoginModal {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const useLoginModal = create<LoginModal>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useLoginModal;
