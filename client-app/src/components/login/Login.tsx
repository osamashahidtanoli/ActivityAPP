import React from 'react';
import { Alert, Button, Snackbar, ThemeProvider } from '@mui/material';
import backgroundImage from 'assets/scene.jpg';
import theme from 'core/style/theme';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import TextInputController from 'components/reactHookForm/TextInputController';
import { useLoginMutation } from 'core/api/account';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'core/constants/constant';
import { useAppDispatch } from 'core/store/store';
import { setAuth, showBar } from 'core/slice/commonSlice';
import styles from './Login.module.css';
import CommonErrorBar from 'components/layout/CommonErrorBar';

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const method = useForm<FormValues>();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    formState: { isValid },
  } = method;

  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    const result = await login(data);
    if ('error' in result) {
      dispatch(
        showBar({
          isOpen: true,
          message: 'Invalid Username or Password',
          type: 'error',
        }),
      );
    } else {
      navigate(`${ROUTES.Activities}`);
      dispatch(
        setAuth({
          token: result.data.token,
          userName: result.data.userName,
          displayUserName: result.data.displayName,
          imageUrl: result.data.image,
        }),
      );
      dispatch(
        showBar({
          isOpen: true,
          message: `Welcome ${result.data.displayName}`,
          type: 'success',
        }),
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CommonErrorBar />
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
