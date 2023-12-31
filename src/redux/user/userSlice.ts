import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { UserStateType } from "types/types/UserStateType";
import operations from "./userOperations";

const initialState: UserStateType = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(operations.registration.fulfilled, (state, action) => {
        if (action.payload && action.payload.tokens && action.payload.data) {
          state.user = action.payload.data;
          state.token = action.payload?.tokens?.accessToken;
          state.isLoggedIn = true;
        }
      })
      .addCase(operations.login.fulfilled, (state, action) => {
        if (action.payload && action.payload.tokens && action.payload.data) {
          state.user = action.payload.data;
          state.token = action.payload.tokens.accessToken;
          state.isLoggedIn = true;
        }
      })
      .addCase(operations.logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(operations.refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(operations.refreshUser.rejected, (state) => {
        state.isRefreshing = true;
      })
      .addCase(operations.refreshUser.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.user = action.payload.data;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        } else {
          state.isRefreshing = false;
        }
      })
      .addCase(operations.repeatConfirmEmail.fulfilled, () => {})
      .addCase(operations.requestResetPassword.fulfilled, () => {})
      .addCase(operations.resetPassword.fulfilled, () => {})
      .addCase(operations.changeProfile.fulfilled, (state, action) => {
        if (action.payload && action.payload.data) {
          state.user = action.payload.data;
        }
      })
      .addCase(operations.changeEmail.fulfilled, () => {})
      .addCase(operations.changePassword.fulfilled, () => {})
      .addCase(operations.deleteProfile.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(operations.uploadPoster.fulfilled, () => {})
      .addCase(operations.uploadAvatar.fulfilled, () => {});
  },
});

export const persisteUserReducer = persistReducer(
  userPersistConfig,
  userSlice.reducer
);
