import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { AuthStateType } from "types/AuthState";
import operations from "./authOperations";

const initialState: AuthStateType = {
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(operations.registration.fulfilled, (state, action) => {
      if (action.payload && action.payload.tokens) {
        state.token = action.payload?.tokens?.accessToken;
        state.isLoggedIn = true;
      }
    });
  },
});

export const persisteAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
