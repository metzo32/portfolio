import { create } from "zustand";

interface IndexStore {
  selectedIndex: number;
  setIndex: (index: number) => void;
}

export const useIndexStore = create<IndexStore>((set) => ({
  selectedIndex: 0,
  setIndex: (index) => set({ selectedIndex: index }),
}));
