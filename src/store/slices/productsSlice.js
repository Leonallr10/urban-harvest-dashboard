import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/mockData";

const initialState = {
  items: products,
  searchQuery: "",
  filterStatus: "All",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setFilterStatus(state, action) {
      state.filterStatus = action.payload;
    },
    addProduct(state, action) {
      state.items.push(action.payload);
    },
    toggleProductStatus(state, action) {
      const product = state.items.find((p) => p.id === action.payload);
      if (product) {
        product.status =
          product.status === "Available" ? "Out of Stock" : "Available";
      }
    },
  },
});

export const { setSearchQuery, setFilterStatus, addProduct, toggleProductStatus } =
  productsSlice.actions;

export const selectFilteredProducts = (state) => {
  const { items, searchQuery, filterStatus } = state.products;
  return items.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === "All" || product.status === filterStatus;
    return matchesSearch && matchesFilter;
  });
};

export default productsSlice.reducer;
