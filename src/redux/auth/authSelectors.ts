import { RootState } from "redux/store";

export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const getIsRefreshing = (state: RootState) => state.auth.isRefreshing;
export const getToken = (state: RootState) => state.auth.token;
