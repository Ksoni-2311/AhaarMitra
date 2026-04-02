import { create } from "zustand";
import axiosInstance from "../utils/axios";

const useVendorStore = create((set) => ({
  vendor: null,
  token: null,
  isAuthenticated: false,

  hitOtp: async ({ phone }) => {
    const res = await axiosInstance.post('/vendor/send-otp', {
      phone
    })
    const data = res.data;
    console.log(data);
  },
  verifyOtp: async ({ phone, otp }) => {
    const res = await axiosInstance.post('/vendor/verify-otp', {
      phone,
      otp,
    });

    console.log("otp-verify call");
    const data = res.data;
    console.log(data);
  },
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