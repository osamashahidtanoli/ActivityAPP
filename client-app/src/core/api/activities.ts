import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { endpoint } from 'core/constants/constant';
import { RootState } from 'core/store/store';
import { Activity, ActivityGetRequest, ActivityPostRequest } from 'core/types/type';

export const activityApi = createApi({
  reducerPath: 'activityApi',
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
  tagTypes: ['ActivitiesTag'],
  endpoints: (builder) => ({
    getActivities: builder.query<Activity[], ActivityGetRequest>({
      query: (arg) => ({
        url: 'Activities',
        method: 'GET',
        params: {...arg}
      }),
      providesTags: ['ActivitiesTag'],
    }),
    postActivity: builder.mutation<void, ActivityPostRequest>({
      query: (arg) => ({
        url: 'Activities',
        method: 'POST',
        body: {...arg}
      }),
      invalidatesTags: ['ActivitiesTag']
    })
  }),
});

export const { useGetActivitiesQuery, usePostActivityMutation } = activityApi;
