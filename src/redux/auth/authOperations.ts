import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import api from "api";
import { ResponseType, RegistrationData, LoginData } from "types/AuthState";
import { UserType } from "types/UserType";
import { TokensType } from "types/TokensType";

const registration = createAsyncThunk<
  ResponseType<UserType, TokensType> | undefined,
  RegistrationData
>("auth/registration", async (registrationData) => {
  try {
    const { data } = await api.post(
      "api/v1/auth/registration",
      registrationData
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
  LoginData
>("auth/login", async (loginData) => {
  try {
    const { data } = await api.post("api/v1/auth/login", loginData);
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

const operations = { registration, login };
export default operations;
