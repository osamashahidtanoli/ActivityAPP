import { Alert, Snackbar } from '@mui/material';
import { getSnackBar } from 'core/selectors/selectors';
import { hideBar } from 'core/slice/commonSlice';
import { useAppDispatch, useAppSelector } from 'core/store/store';

const CommonErrorBar = () => {
  const getCurrentSnackBarState = useAppSelector(getSnackBar);
  const { isOpen, message, type } = getCurrentSnackBarState;
  const dispatch = useAppDispatch();

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(hideBar());
  };

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        variant='filled'
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CommonErrorBar;
