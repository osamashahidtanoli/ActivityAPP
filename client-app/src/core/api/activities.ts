import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { endpoint } from 'core/constants/constant';
import { RootState } from 'core/store/store';
import { Activity } from 'core/types/type';

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
  endpoints: (builder) => ({
    getActivities: builder.query<Activity[], void>({
      query: () => 'Activities?PageNumber=1&PageSize=10',
    }),
  }),
});

export const { useGetActivitiesQuery } = activityApi;
