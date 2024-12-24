import { createSlice } from "@reduxjs/toolkit";

interface themeState {
  darkMode: boolean;
}

const initialState: themeState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
