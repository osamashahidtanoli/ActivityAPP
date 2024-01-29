import CommonErrorBar from 'components/layout/CommonErrorBar';
import Page from 'components/layout/Page';
import PageLoader from 'components/layout/PageLoader';
import { accountApi } from 'core/api/account';
import AppRoutes from 'core/routes/Routes';
import { getCurrentUser } from 'core/selectors/selectors';
import { useAppSelector } from 'core/store/store';
import React from 'react';

const App = () => {
  const [callApi] = accountApi.endpoints.getCurrentAccount.useLazyQuery();
  const { token, userName } = useAppSelector(getCurrentUser);
  const isUserAvailabe = Boolean(token) && !userName;

  React.useEffect(() => {
    if (token) {
      callApi();
    }
  }, []);

  if (isUserAvailabe)
    return (
      <Page>
        <PageLoader />
      </Page>
    );

  return (
    <>
      <CommonErrorBar />
      <AppRoutes />
    </>
  );
};

export default App;
