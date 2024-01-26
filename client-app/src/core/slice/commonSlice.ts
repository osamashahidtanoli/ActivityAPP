
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { accountApi } from 'core/api/account';
import { activityApi } from 'core/api/activities';
import { AuthPayload, CommonState, ErrorBar } from 'core/types/type';

const initialState: CommonState = {
  user: {
    token: localStorage.getItem('token') ?? null,
  userName: null,
  displayUserName: null,
  imageUrl: null,
  },
  snackBar: {
    isOpen: false,
    message: '',
    type: undefined
  }
};

const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthPayload>) => {
      state.user.token = action.payload.token;
      state.user.displayUserName = action.payload.displayUserName;
      state.user.userName = action.payload.userName;
      state.user.imageUrl = action.payload.imageUrl;
      localStorage.setItem('token', action.payload.token);
    },
    clearAuth: (state) => {
        state.user.token = initialState.user.token;
        state.user.displayUserName = initialState.user.displayUserName;
        state.user.userName = initialState.user.userName;
        state.user.imageUrl = initialState.user.imageUrl;
        localStorage.removeItem('token');
    },
    showBar: (state, action: PayloadAction<ErrorBar>) => {
      state.snackBar.isOpen = action.payload.isOpen;
      state.snackBar.message = action.payload.message;
      state.snackBar.type = action.payload.type;
    },
    hideBar: (state) => {
      state.snackBar.isOpen = initialState.snackBar.isOpen;
      state.snackBar.message = initialState.snackBar.message;
      state.snackBar.type = initialState.snackBar.type;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      accountApi.endpoints.getCurrentAccount.matchFulfilled,
      (state, action) => {
        state.user.token = action.payload.token;
        state.user.displayUserName = action.payload.displayName;
        state.user.userName = action.payload.userName;
        state.user.imageUrl = action.payload.image;
      },
    )
    builder.addMatcher(
      activityApi.endpoints.updateAttendance.matchFulfilled,
      (state, action) => {
      state.snackBar.isOpen = true;
      state.snackBar.message = action.meta.arg.originalArgs.type === 'join' ? 'Successfully Joined Activity' : 'You have Withdraw Your Participation';
      state.snackBar.type = action.meta.arg.originalArgs.type === 'join' ? 'success' : 'error';
      }
    )
  },
});

export const { setAuth, clearAuth, showBar, hideBar } = commonSlice.actions;

export default commonSlice.reducer;
