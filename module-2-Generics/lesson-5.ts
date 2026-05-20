import { createContext, useContext } from "react";
import { create, StoreApi, UseBoundStore } from "zustand";

type SideNavStorePayload = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

export type SideNavStore = UseBoundStore<StoreApi<SideNavStorePayload>>;

export const useSideNavStore_Unused = create<SideNavStorePayload>()(set => ({
  isOpen: false,
  toggleIsOpen: () => set(state => ({ isOpen: !state.isOpen })),
}));

export const SideNavContext = createContext<SideNavStore>(null as any);

// -------------------------------------> TODO: fix this
export const useSideNavStore = (selector: any) => {
  const sideNavStore = useContext(SideNavContext);
  return sideNavStore(selector);
};

const useFoo = () => {
  const { isOpen } = useSideNavStore(state => ({ isOpen: state.isOpen }));
  //      ^?

  console.log(isOpen);
};

const useBar = () => {
  const { toggleIsOpen } = useSideNavStore(state => ({
    //      ^?
    toggleIsOpen: state.toggleIsOpen,
  }));

  console.log(toggleIsOpen);
};

export { useFoo, useBar };
