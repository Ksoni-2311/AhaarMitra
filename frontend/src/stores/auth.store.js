import { create } from "zustand";
import axiosInstance from "../utils/axios";

const useAuthStore = create((set) => ({
  user: null,
  login:async (params) => {
    try {
      const res=await axiosInstance.post('/login');
      const data=res.data();
      console.log(data);
    } catch (error) {
      console.log("error in useAuthStore",error);
      }
  }
}));

export default useAuthStore;