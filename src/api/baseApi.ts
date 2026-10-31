import {
  type BaseQueryFn,
  type FetchArgs,
  createApi,
  retry,
} from "@reduxjs/toolkit/query/react";
import axios, { AxiosError } from "axios";
import { sleep } from "./services/sleep.service";

/* ----------------------------------------
   AXIOS INSTANCE
-----------------------------------------*/
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // withCredentials: true, // for cookies
});

/* ----------------------------------------
   BASE QUERY
-----------------------------------------*/
const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method?: FetchArgs["method"];
      body?: unknown;
      params?: unknown;
    },
    unknown,
    unknown
  > =>
  async (args) => {
    try {
      const result = await api({
        url: args.url,
        method: args.method ?? "GET",
        data: args.body ?? {},
        params: args.params,
        headers: {
          "Content-Type": "application/json",
          "x-app-type": import.meta.env.VITE_APP_TYPE,
        },
      });

      return { data: result.data };
    } catch (error) {
      const err = error as AxiosError<unknown>;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

/* ----------------------------------------
   BASE API
-----------------------------------------*/
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: retry(axiosBaseQuery(), {
    maxRetries: 2,
    backoff: async (attempt, _maxRetries, signal) => {
      const delay = Math.min(1000 * 2 ** attempt, 5000);
      await sleep(delay, signal);
    },
  }),
  tagTypes: ["Projects"],
  endpoints: () => ({}),
});
