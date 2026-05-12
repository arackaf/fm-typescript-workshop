import { createContext, useContext } from "react";
import { StoreApi, UseBoundStore } from "zustand";

type SideNavStorePayload = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

export type SideNavStore = UseBoundStore<StoreApi<SideNavStorePayload>>;

export const SideNavContext = createContext<SideNavStore>(null as any);

export const useSideNavStore = <T>(
  selector: (state: SideNavStorePayload) => T
) => {
  const sideNavStore = useContext(SideNavContext);
  return sideNavStore(selector);
};

const useFoo = () => {
  const { isOpen } = useSideNavStore((state) => ({ isOpen: state.isOpen }));

  console.log(isOpen);
};

const useBar = () => {
  const { toggleIsOpen } = useSideNavStore((state) => ({
    toggleIsOpen: state.toggleIsOpen,
  }));

  console.log(toggleIsOpen);
};

export { useFoo, useBar };
