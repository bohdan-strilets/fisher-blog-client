import { RootState } from "redux/store";

export const getIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const getIsRefreshing = (state: RootState) => state.user.isRefreshing;
export const getToken = (state: RootState) => state.user.token;
export const getUser = (state: RootState) => state.user.user;
export const getUserId = (state: RootState) => state.user.user?._id;
export const getUserEmail = (state: RootState) => state.user.user?.email;
