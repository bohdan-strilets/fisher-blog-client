import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { UserStateType } from "types/UserState";
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
      });
  },
});

export const persisteUserReducer = persistReducer(
  userPersistConfig,
  userSlice.reducer
);
