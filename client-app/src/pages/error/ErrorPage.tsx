import { Alert, Button } from '@mui/material';
import Page from 'components/layout/Page';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate('/');
  };
  return (
    <Page>
      <Alert sx={{ my: 5 }} severity='error'>
        This Page does not exist
      </Alert>
      <Button onClick={navigateToDashboard} variant='contained'>
        Go to Dashboard
      </Button>
    </Page>
  );
};

export default ErrorPage;
