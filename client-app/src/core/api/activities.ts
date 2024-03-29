import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { endpoint } from 'core/constants/constant';
import { RootState } from 'core/store/store';
import { Activity, ActivityGetRequest, ActivityPostRequest, ProfileResponse } from 'core/types/type';

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
  tagTypes: ['ActivitiesTag', 'ActivityTag'],
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
    }),
    updateAttendance: builder.mutation<void, {id: string, type: string}>({
      query: ({id}) => ({
        url: `Activities/${id}/attend`,
        method: 'POST',
      }),
      invalidatesTags: ['ActivitiesTag', 'ActivityTag']
    }),
    getActivity: builder.query<Activity, string>({
      query: (id) => ({
        url: `Activities/${id}`,
        method: 'GET',
      }),
      providesTags: ['ActivityTag']
    }),
    getUserProfile: builder.query<ProfileResponse, string>({
      query: (userName) => ({
        url: `Profiles/${userName}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetActivitiesQuery, usePostActivityMutation, useUpdateAttendanceMutation, useGetActivityQuery, useGetUserProfileQuery } = activityApi;
