import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "redux/store";
import { API_URL } from "api";
import { ResponseType, CreatePostDto, ChangePostDto } from "types/PostApiState";
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

    getPostById: builder.query<ResponseType<PostType>, string>({
      query: (postId) => ({ url: `one-post/${postId}` }),
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

    uploadImage: builder.mutation<
      ResponseType<PostType>,
      { file: FormData; postId: string }
    >({
      query: ({ file, postId }) => ({
        url: `upload-image/${postId}`,
        method: "POST",
        body: file,
      }),
      invalidatesTags: ["posts"],
    }),

    uploadVideo: builder.mutation<
      ResponseType<PostType>,
      { file: FormData; postId: string }
    >({
      query: ({ file, postId }) => ({
        url: `upload-video/${postId}`,
        method: "POST",
        body: file,
      }),
      invalidatesTags: ["posts"],
    }),

    changePost: builder.mutation<
      ResponseType<PostType>,
      { changePostDto: ChangePostDto; postId: string }
    >({
      query: ({ changePostDto, postId }) => ({
        url: `update-post/${postId}`,
        method: "PATCH",
        body: changePostDto,
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUploadImageMutation,
  useUploadVideoMutation,
  useChangePostMutation,
} = postApi;
