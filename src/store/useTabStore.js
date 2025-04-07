import { create } from "zustand";

const useTabStore = create((set) => ({
  tabs: [],
  activeTab: null,

  openTab: (name, path) =>
    set((state) => {
      const exists = state.tabs.find((tab) => tab.path === path);
      const newTabs = exists
        ? state.tabs
        : [...state.tabs, { name, path }];
      return {
        tabs: newTabs,
        activeTab: path,
      };
    }),

  closeTab: (path) =>
    set((state) => {
      const remainingTabs = state.tabs.filter((tab) => tab.path !== path);
      let newActive = state.activeTab;
      if (state.activeTab === path) {
        newActive = remainingTabs.length
          ? remainingTabs[remainingTabs.length - 1].path
          : null;
      }
      return {
        tabs: remainingTabs,
        activeTab: newActive,
      };
    }),

  setActiveTab: (path) => set({ activeTab: path }),
}));

export default useTabStore;
