import { create } from "zustand";
import axiosInstance from "../utils/axios";

const useVendorStore = create((set) => ({
  vendor: [],
  token: null,
  isAuthenticated: false,
  loading: false,

  registerVendor: async (formData) => {
  try {
    set({ loading: true });

    const res = await axiosInstance.post(
      "/vendor/register",
      formData,
    );

    const data = res.data;

    // ✅ save token
    localStorage.setItem("token", data.token);

    set({
      token: data.token,
      vendor: data.vendor,
      isAuthenticated: true,
      loading: false,
    });

    return { success: true };

  } catch (error) {
    set({ loading: false });

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
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const data = res.data;

    console.log("saveBusiness success", data);

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
     const res = await axiosInstance.post(
  "/vendor/business",
  formData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "multipart/form-data",
    },
  }
);

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
  },
  getAllVendors: async () => {
  try {
    set({ loading: true });

    const res = await axiosInstance.get("/vendor/all");
    const data = res.data;

    console.log("API RESPONSE:", data); // 👈 ADD THIS

    set({
      vendor: data.vendors || [], // ✅ FIX
      loading: false,
    });

  } catch (error) {
    console.error(error);
    set({ loading: false, vendor: [] }); // ✅ SAFE
  }
},getVendorFullDetails: async (id) => {
  try {
    set({ loading: true, error: null });

    const res = await axiosInstance.get(`/vendor/${id}`);
    console.log(res);
    const data = res.data;
    console.log(data);
    
    set({
      selectedVendor: data.vendor || null,
      vendorConfig: data.config || null,
      loading: false,
    });

    return { success: true };

  } catch (error) {
    const message =
      error.response?.data?.message || "Failed to fetch vendor";

    console.error("Vendor fetch error:", message);

    set({
      loading: false,
      error: message,
      selectedVendor: null,
      vendorConfig: null,
    });

    return { success: false };
  }
}
}));


export default useVendorStore;