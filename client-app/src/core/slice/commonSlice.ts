
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { accountApi } from 'core/api/account';
import { AuthPayload, AuthState } from 'core/types/type';

const initialState: AuthState = {
  token: localStorage.getItem('token') ?? null,
  userName: null,
  displayUserName: null,
  imageUrl: null,
};

const commonSlice = createSlice({
  name: 'commonSlice',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthPayload>) => {
      state.token = action.payload.token;
      state.displayUserName = action.payload.displayUserName;
      state.userName = action.payload.userName;
      state.imageUrl = action.payload.imageUrl;
      localStorage.setItem('token', action.payload.token);
    },
    clearAuth: (state) => {
        state.token = initialState.token;
        state.displayUserName = initialState.displayUserName;
        state.userName = initialState.userName;
        state.imageUrl = initialState.imageUrl;
        localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      accountApi.endpoints.getCurrentAccount.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token;
        state.displayUserName = action.payload.displayName;
        state.userName = action.payload.userName;
        state.imageUrl = action.payload.image;
      }
    )
  },
});

export const { setAuth, clearAuth } = commonSlice.actions;

// Export the reducer
export default commonSlice.reducer;
