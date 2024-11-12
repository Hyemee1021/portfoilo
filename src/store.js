import { createSlice, configureStore } from "@reduxjs/toolkit";

const lightSlice = createSlice({
  name: "light",
  initialState: {
    value: true,
  },
  reducers: {
    toggleLight: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleLight } = lightSlice.actions;

export const store = configureStore({
  reducer: {
    light: lightSlice.reducer,
  },
});
