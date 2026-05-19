import { createSlice } from "@reduxjs/toolkit";
import { dashboardStats, recentOrders } from "../../data/mockData";

const initialState = {
  stats: dashboardStats,
  orders: recentOrders,
  sidebarOpen: true,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { toggleSidebar } = dashboardSlice.actions;
export default dashboardSlice.reducer;
