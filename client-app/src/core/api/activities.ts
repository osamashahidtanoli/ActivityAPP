import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { endpoint } from 'core/constants/constant';
import { Activity } from 'core/types/type';

export const activityApi = createApi({
  reducerPath: 'activityApi',
  baseQuery: fetchBaseQuery({ baseUrl: endpoint }),
  endpoints: (builder) => ({
    getActivities: builder.query<Activity[], void>({
      query: () => 'Activities?PageNumber=1&PageSize=10',
    }),
  }),
});

export const { useGetActivitiesQuery } = activityApi;
