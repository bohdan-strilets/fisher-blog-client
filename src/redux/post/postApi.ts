import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "redux/store";
import { API_URL } from "api";
import { ResponseType, CreatePostDto } from "types/PostApiState";
import { PostType } from "types/PostType";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}api/v1/posts`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<ResponseType<PostType[]>, void>({
      query: () => ({ url: "all-posts" }),
      providesTags: ["posts"],
    }),
    createPost: builder.mutation<ResponseType<PostType>, CreatePostDto>({
      query: (createPostDto) => ({
        url: "create-post",
        method: "POST",
        body: createPostDto,
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postApi;
