import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoute';
import ActivityPage from 'pages/activity/ActivityPage';
import Login from 'components/login/Login';
import { ROUTES } from 'core/constants/constant';
import HomePage from 'pages/home/HomePage';
import PublicRoute from './PublicRoute';
import ErrorPage from 'pages/error/ErrorPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<HomePage />} path='/' />
        <Route element={<ActivityPage />} path={`/${ROUTES.Activities}`} />
      </Route>
      <Route element={<PublicRoute />}>
        <Route element={<Login />} path={ROUTES.Login} />
      </Route>
      <Route element={<ErrorPage />} path='*'></Route>
    </Routes>
  );
};

export default AppRoutes;
