import React from 'react';
import { Alert, Button, Snackbar, ThemeProvider } from '@mui/material';
import styles from './Login.module.css';
import backgroundImage from 'assets/scene.jpg';
import theme from 'core/style/theme';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import TextInputController from 'components/reactHookForm/TextInputController';
import { useLoginMutation } from 'core/api/account';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'core/constants/constant';
import { useAppDispatch } from 'core/store/store';
import { setAuth } from 'core/slice/commonSlice';

type FormValues = {
  email: string;
  password: string;
};

type snackBarState = {
  isOpen: boolean;
  isError: boolean;
};

const Login = () => {
  const method = useForm<FormValues>();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState<snackBarState>({
    isOpen: false,
    isError: false,
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = method;

  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    const result = await login(data);
    if ('error' in result) {
      setOpen({ isOpen: true, isError: true });
    } else {
      navigate(`/${ROUTES.Activities}`);
      dispatch(
        setAuth({
          token: result.data.token,
          userName: result.data.userName,
          displayUserName: result.data.displayName,
          imageUrl: result.data.image,
        }),
      );
    }
  };

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen({ isOpen: false, isError: false });
  };

  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        open={open.isOpen}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={open.isError ? 'error' : 'success'}
          variant='filled'
          sx={{ width: '100%' }}
        >
          {open.isError ? 'Invalid Username or Password' : 'Welcome'}
        </Alert>
      </Snackbar>
      <section>
        <div className={styles.imgBox}>
          <img src={backgroundImage} alt='' />
        </div>
        <div className={styles.contentBox}>
          <div className={styles.formBox}>
            <h2>Login</h2>
            <FormProvider {...method}>
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className={styles.inputBox}>
                  <TextInputController
                    name='email'
                    type='email'
                    placeholder='Email'
                    isRequired={true}
                  />
                </div>
                <div className={styles.inputBox}>
                  <TextInputController
                    name='password'
                    type='password'
                    placeholder='Password'
                    isRequired={true}
                  />
                </div>
                <div className={styles.inputBox}>
                  <Button variant='contained' type='submit' disabled={!isValid}>
                    Sign In
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default Login;
