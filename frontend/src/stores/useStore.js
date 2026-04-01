import { create } from "zustand";

const useStore = create((set) => ({
  // ✅ store selected vendor
  selectedVendor: null,

  // ✅ function to update it
  setVendor: (vendor) => set({ selectedVendor: vendor }),
}));

export default useStore;