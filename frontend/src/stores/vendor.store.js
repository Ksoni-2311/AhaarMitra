import { create } from "zustand";

const useVendorStore = create((set) => ({
  vendor: null,
  token: null,
  isAuthenticated: false,

  setVendor: (vendor, token) =>
    set({
      vendor,
      token,
      isAuthenticated: true,
    }),

  clearVendor: () =>
    set({
      vendor: null,
      token: null,
      isAuthenticated: false,
    }),
}));

export default useVendorStore;