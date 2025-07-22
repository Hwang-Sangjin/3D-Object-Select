import { create } from "zustand";

const useOnClickObj = create((set) => ({
  isOnClickObj: false,
  setIsOnClickObj: (value) => set((state) => ({ isOnClickObj: value })),
  //   toggleOnClickObj: () =>
  //     set((state) => ({ isOnClickObj: !state.isOnClickObj })),
}));

export default useOnClickObj;
