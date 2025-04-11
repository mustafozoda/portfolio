import { create } from "zustand";

const useTerminalStore = create((set) => ({
  isTerminalOpen: false,
  shouldAutoRun: false,

  toggleTerminal: () =>
    set((state) => ({ isTerminalOpen: !state.isTerminalOpen })),

  openTerminalWithRun: () =>
    set(() => ({ isTerminalOpen: true, shouldAutoRun: true })),

  clearAutoRun: () => set(() => ({ shouldAutoRun: false })),
}));

export default useTerminalStore;
