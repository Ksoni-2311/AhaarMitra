import { create } from "zustand";
import axiosInstance from "../utils/axios";

const useVendorStore = create((set) => ({
  vendor: null,
  token: null,
  isAuthenticated: false,
  loading: false,

  registerVendor: async (formData) => {
    try {
      set({ loading: true });

      const res = await axiosInstance.post(
        "http://localhost:8080/api/vendor/register",
        formData
      );

      const data = res.data;

      // ✅ Show success message
      alert(data.message);

      // ✅ Save token (optional but important)
      localStorage.setItem("token", data.token);

      set({ loading: false });

      // ✅ store token
      localStorage.setItem("token", data.token);
      return { success: true, data };

    } catch (error) {
      set({ loading: false });

      // ✅ Handle backend error message
      const message =
        error.response?.data?.message || "Something went wrong";

      alert(message);

      return { success: false };
    }
  },

  saveBusiness: async ({ businessName, type, address, gstNumber, fssaiNumber }) => {
    try {
      set({ loading: true });
      const token = localStorage.getItem("token");

      const res = await axiosInstance.post("/vendor/business", {
        businessName,
        type,
        address,
        gstNumber,
        fssaiNumber,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = res.data;

      console.log("saveBusiness success", data);

      // ✅ show backend message
      alert(data.message);

      set({ loading: false });

      return { success: true, data };

    } catch (error) {
      set({ loading: false });

      const message =
        error.response?.data?.message || "Something went wrong";

      console.error("saveBusiness error", message);

      alert(message);

      return { success: false };
    }
  },
  saveBank: async (formData) => {
    try {

      set({ loading: true });
      const token = localStorage.getItem("token")
      const res = await axiosInstance.post("/vendor/bank", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      const data = res.data;

      console.log("saveBank success", data);

      alert(data.message); // ✅ show backend response

      set({ loading: false });

      return { success: true, data };

    } catch (error) {
      set({ loading: false });

      const message =
        error.response?.data?.message || "Something went wrong";

      console.error("saveBank error", message);

      alert(message);

      return { success: false };
    }
  }
}));

export default useVendorStore;