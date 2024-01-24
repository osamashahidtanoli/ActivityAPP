import { Button, Card, CardActions, CardContent, Grid } from '@mui/material';
import { getCurrentUser } from 'core/selectors/selectors';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useAppSelector } from 'core/store/store';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'core/constants/constant';
import styles from '../Home.module.css';

const UserCard = () => {
  const { displayUserName } = useAppSelector(getCurrentUser);
  const navigate = useNavigate();

  const navigateToActivitiesPage = () => {
    navigate(ROUTES.Activities);
  };

  return (
    <Grid item md={3}>
      <Card sx={{ my: 5 }} className={styles.card}>
        <CardContent>
          <h4>Welcome, {displayUserName}</h4>
          <h5>Are you excited to see What's new?</h5>
        </CardContent>
        <CardActions>
          <Button
            variant='contained'
            size='small'
            sx={{ background: '#fff', color: '#673ab7', fontWeight: 600 }}
            onClick={navigateToActivitiesPage}
          >
            Go to Activities <NavigateNextIcon />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default UserCard;
