import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import api from "api";
import { ResponseType, RegistrationDto, LoginDto } from "types/UserState";
import { UserType } from "types/UserType";
import { TokensType } from "types/TokensType";

const registration = createAsyncThunk<
  ResponseType<UserType, TokensType> | undefined,
  RegistrationDto
>("user/registration", async (registrationDto) => {
  try {
    const { data } = await api.post(
      "api/v1/auth/registration",
      registrationDto
    );
    if (data) {
      const response = data as ResponseType<UserType, TokensType>;
      return response;
    }
    return undefined;
  } catch (error: any) {
    if (error.response) {
      const err = error.response.data as ResponseType;
      toast.error(`${err.code} - ${err.message}`);
    } else if (error.request) {
      const err = error as AxiosError;
      toast.error(err.message);
    } else {
      const err = error as AxiosError;
      toast.error(err.message);
    }
  }
});

const login = createAsyncThunk<
  ResponseType<UserType, TokensType> | undefined,
  LoginDto
>("user/login", async (loginDto) => {
  try {
    const { data } = await api.post("api/v1/auth/login", loginDto);
    if (data) {
      const response = data as ResponseType<UserType, TokensType>;
      return response;
    }
    return undefined;
  } catch (error: any) {
    if (error.response) {
      const err = error.response.data as ResponseType;
      toast.error(`${err.code} - ${err.message}`);
    } else if (error.request) {
      const err = error as AxiosError;
      toast.error(err.message);
    } else {
      const err = error as AxiosError;
      toast.error(err.message);
    }
  }
});

const logout = createAsyncThunk<ResponseType | undefined>(
  "user/logout",
  async () => {
    try {
      const { data } = await api.get("api/v1/auth/logout");
      if (data) {
        const response = data as ResponseType;
        return response;
      }
      return undefined;
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as ResponseType;
        toast.error(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  }
);

const refreshUser = createAsyncThunk<ResponseType<UserType> | undefined>(
  "user/refresh",
  async () => {
    try {
      const { data } = await api.get("api/v1/users/current-user");
      if (data) {
        const response = data as ResponseType<UserType>;
        return response;
      }
      return undefined;
    } catch (error: any) {
      if (error.response) {
        const err = error.response.data as ResponseType;
        console.log(`${err.code} - ${err.message}`);
      } else if (error.request) {
        const err = error as AxiosError;
        toast.error(err.message);
      } else {
        const err = error as AxiosError;
        toast.error(err.message);
      }
    }
  }
);

const operations = { registration, login, logout, refreshUser };
export default operations;
