import { createContext, useContext } from "react";
import { StoreApi, UseBoundStore } from "zustand";

type SideNavStorePayload = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

export type SideNavStore = UseBoundStore<StoreApi<SideNavStorePayload>>;

// TODO: This doesn't work
//type SelectorPayload = Parameters<SideNavStore>[0];

export const SideNavContext = createContext<SideNavStore>(null as any);

export const useSideNavStore = <T>(
  // TODO: add this
  selector: (state: SideNavStorePayload) => T
) => {
  const sideNavStore = useContext(SideNavContext);
  return sideNavStore(selector);
};

const useFoo = () => {
  const { isOpen } = useSideNavStore(state => ({ isOpen: state.isOpen }));

  console.log(isOpen);
};

const useBar = () => {
  const { toggleIsOpen } = useSideNavStore(state => ({
    toggleIsOpen: state.toggleIsOpen,
  }));

  console.log(toggleIsOpen);
};

export { useFoo, useBar };
