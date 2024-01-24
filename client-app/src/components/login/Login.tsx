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

const Login = () => {
  const method = useForm<FormValues>();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState<boolean>(false);

  const {
    handleSubmit,
    formState: { isValid },
  } = method;

  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    const result = await login(data);
    if ('error' in result) {
      setOpen(true);
    } else {
      setOpen(false);
      navigate(`${ROUTES.Activities}`);
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

    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity='error'
          variant='filled'
          sx={{ width: '100%' }}
        >
          Invalid Username or Password
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
