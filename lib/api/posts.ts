import axios, { AxiosError } from "axios";

const apiBaseURL = "https://jsonplaceholder.typicode.com/posts";

const axiosConfig = {
  baseURL: apiBaseURL,
  headers: { "Content-Type": "application/json" },
};

const postsApi = axios.create(axiosConfig);

export const getPosts = async () => {
  try {
    const response = await postsApi.get("/");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (id: number) => {
  try {
    const response = await postsApi.get(`/${id}`);
    return response.data;
  } catch (error: any) {
    if (error?.response?.status >= 500) {
      throw new Error("Oops, something went wrong");
    } else if (error?.response?.status === 404) {
      throw new Error("Post not found");
    } else {
      throw new Error("Failed to fetch post");
    }
  }
};
