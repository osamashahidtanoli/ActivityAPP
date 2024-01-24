import { Card, CardContent, Grid, IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import styles from '../Home.module.css';

const TotalActivitiesCard = () => {
  return (
    <Grid item md={3}>
      <Card sx={{ my: 5 }} className={styles.card}>
        <CardContent>
          <h4>Total Activities:</h4>
          <h5 className={styles.cardItem}>3</h5>
          <IconButton className={styles.cardIcon}>
            <CalendarTodayIcon sx={{ color: '#fff', fontSize: '2.5rem' }} />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TotalActivitiesCard;
