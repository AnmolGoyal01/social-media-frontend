import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string | null;
  fullName: string | null;
  avatar: string;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  username: null,
  fullName: null,
  avatar: "https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        username: string;
        fullName: string;
        avatar: string;
      }>
    ) => {
      state.username = action.payload.username;
      state.fullName = action.payload.fullName;
      state.avatar =
        action.payload.avatar ||
        "https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg";
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.username = null;
      state.avatar = "https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg";
      state.isAuthenticated = false;
    },
    updateProfile: (state, action: PayloadAction<{ avatar: string }>) => {
      state.avatar = action.payload.avatar;
    },
  },
});

export const { login, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;
