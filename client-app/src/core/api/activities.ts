import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { endpoint } from 'core/constants/constant';
import { RootState } from 'core/store/store';
import { Activity, ActivityGetRequest } from 'core/types/type';

export const activityApi = createApi({
  reducerPath: 'activityApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: endpoint ,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).commonSlice.token;
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
  }),
});

export const { useGetActivitiesQuery } = activityApi;
