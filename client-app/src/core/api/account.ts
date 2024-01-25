import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { endpoint } from 'core/constants/constant';
import { RootState } from 'core/store/store';
import {  AuthState, UserLoginPayload, UserLoginResponse } from 'core/types/type';

export const accountApi = createApi({
  reducerPath: 'accountApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: endpoint ,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).commonSlice.user.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserLoginResponse, UserLoginPayload>({
      query: (args) => {
        const {email, password} = args;
        return {
            url: '/Account/login',
            body: {email, password},
            method: 'POST'
        }
      },
    }),
    getCurrentAccount: builder.query<UserLoginResponse, void>(
      {
        query: () => '/Account'
      }
    )
  }),
});

export const { useLoginMutation, useGetCurrentAccountQuery } = accountApi;
