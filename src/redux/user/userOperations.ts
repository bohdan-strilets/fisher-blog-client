import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import api from "api";
import {
  ResponseType,
  RegistrationDto,
  LoginDto,
  EmailDto,
  ResetPasswordDto,
  ChangeProfileDto,
  ChangePasswordDto,
} from "types/UserState";
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

const repeatConfirmEmail = createAsyncThunk<ResponseType | undefined, EmailDto>(
  "user/repeat-confirm-email",
  async (emailDto) => {
    try {
      const { data } = await api.post(
        "api/v1/users/repeat-activation-email",
        emailDto
      );
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

const requestResetPassword = createAsyncThunk<
  ResponseType | undefined,
  EmailDto
>("user/request-reset-password", async (emailDto) => {
  try {
    const { data } = await api.post(
      "api/v1/users/request-reset-password",
      emailDto
    );
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
});

const resetPassword = createAsyncThunk<
  ResponseType | undefined,
  ResetPasswordDto
>("user/reset-password", async (resetPasswordDto) => {
  try {
    const { data } = await api.post(
      "api/v1/users/reset-password/",
      resetPasswordDto
    );
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
});

const changeProfile = createAsyncThunk<
  ResponseType<UserType> | undefined,
  ChangeProfileDto
>("user/change-profile", async (changeProfileDto) => {
  try {
    const { data } = await api.put(
      "api/v1/users/change-profile",
      changeProfileDto
    );
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
});

const changeEmail = createAsyncThunk<ResponseType | undefined, EmailDto>(
  "user/change-email",
  async (emailDto) => {
    try {
      const { data } = await api.patch("api/v1/users/change-email", emailDto);
      if (data) {
        const response = data as ResponseType;
        return response;
      }
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

const changePassword = createAsyncThunk<
  ResponseType | undefined,
  ChangePasswordDto
>("user/change-password", async (changePasswordDto) => {
  try {
    const { data } = await api.patch(
      "api/v1/users/change-password",
      changePasswordDto
    );
    if (data) {
      const response = data as ResponseType;
      return response;
    }
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

const deleteProfile = createAsyncThunk<ResponseType | undefined>(
  "user/delete-profile",
  async () => {
    try {
      const { data } = await api.delete("api/v1/users/remove-profile");
      if (data) {
        const response = data as ResponseType;
        return response;
      }
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

const uploadPoster = createAsyncThunk<
  ResponseType<UserType> | undefined,
  FormData
>("user/upload-avatar", async (poster) => {
  try {
    const { data } = await api.post("api/v1/users/upload-poster", poster);
    if (data) {
      const response = data as ResponseType;
      return response;
    }
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

const operations = {
  registration,
  login,
  logout,
  refreshUser,
  repeatConfirmEmail,
  requestResetPassword,
  resetPassword,
  changeProfile,
  changeEmail,
  changePassword,
  deleteProfile,
  uploadPoster,
};

export default operations;
