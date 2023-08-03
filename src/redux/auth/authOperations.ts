import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import api from "api";
import { ResponseType, RegistrationData } from "types/AuthState";
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
      console.log(response.data?._id);

      return response;
    }
    return undefined;
  } catch (error: any) {
    if (error.response) {
      const err = error as ResponseType;
      console.log(err.success);
      console.log(err.status);
      console.log(err.code);
      console.log(err.message);
    } else if (error.request) {
      const err = error as AxiosError;
      console.log(err.request);
      console.log(err.code);
      console.log(err.message);
    } else {
      const err = error as AxiosError;
      console.log(err.message);
    }
    console.log(error.config);
  }
});

const operations = { registration };
export default operations;
