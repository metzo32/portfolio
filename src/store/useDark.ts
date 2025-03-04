import { create } from "zustand";

interface DarkStore {
  isDark: boolean;
  toggleDark: () => void;
  setDark: (value: boolean) => void;
}

export const useDark = create<DarkStore>((set) => ({
  isDark: typeof window !== "undefined" && localStorage.getItem("theme") === "dark",
  
  toggleDark: () => set((state) => {
    const newTheme = state.isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);

    // HTML 태그에 다크 모드 적용
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }

    return { isDark: !state.isDark };
  }),

  setDark: (value: boolean) => set(() => {
    const newTheme = value ? "dark" : "light";
    localStorage.setItem("theme", newTheme);

    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }

    return { isDark: value };
  }),
}));
