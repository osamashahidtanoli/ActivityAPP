import { Card, CardContent, Grid, IconButton } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import styles from '../Home.module.css';

const TotalUsersCard = () => {
  return (
    <Grid item md={3}>
      <Card sx={{ my: 5 }} className={styles.card}>
        <CardContent>
          <h4>Total Users:</h4>
          <h5 className={styles.cardItem}>3</h5>
          <IconButton className={styles.cardIcon}>
            <GroupIcon sx={{ color: '#fff', fontSize: '2.5rem' }} />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TotalUsersCard;
