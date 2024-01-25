import { RootState } from "core/store/store";

export const getCurrentUser = (state:RootState) => state.commonSlice.user;
export const getSnackBar = (state:RootState) => state.commonSlice.snackBar;
export const getActivityFiler = (state: RootState) => state.activitySlice.activityFilter;