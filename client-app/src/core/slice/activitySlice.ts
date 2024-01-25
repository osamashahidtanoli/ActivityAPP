
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ActivitySlice } from 'core/types/type';

const initialState: ActivitySlice = {
    activityFilter: {
        PageNumber: 1,
        PageSize: 25,
        IsGoing: false,
        IsHost: false,
        StartDate: undefined,
    }
};

const activitySlice = createSlice({
  name: 'activitySlice',
  initialState,
  reducers: {
    setHost: (state) => {
        state.activityFilter.IsHost = true;
        state.activityFilter.IsGoing = false
    },
    setGoing: (state) => {
        state.activityFilter.IsHost = false;
        state.activityFilter.IsGoing = true
    },
    resetActivityFilter: (state) => {
        state.activityFilter.IsGoing = initialState.activityFilter.IsGoing;
        state.activityFilter.IsHost = initialState.activityFilter.IsHost;
        state.activityFilter.PageNumber = initialState.activityFilter.PageNumber;
        state.activityFilter.PageSize = initialState.activityFilter.PageSize;
        state.activityFilter.StartDate = initialState.activityFilter.StartDate;
    }
  }
});

export const { setHost, setGoing, resetActivityFilter } = activitySlice.actions;

export default activitySlice.reducer;
