import { Avatar, Box, Card, CardContent, Grid } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import styles from '../Home.module.css';
import { green } from '@mui/material/colors';

interface Props {
  totalActivities: number;
}

const TotalActivitiesCard = ({ totalActivities }: Props) => {
  return (
    <Grid item md={4} sm={6}>
      <Card>
        <CardContent>
          <Box display={'flex'} columnGap={2}>
            <Avatar sx={{ bgcolor: green[500], width: 60, height: 60 }}>
              <CalendarTodayIcon />
            </Avatar>
            <div>
              <p className={styles.cardLabelInfo}>My Total Activities</p>
              <h3 className={styles.cardValue}>{totalActivities}</h3>
            </div>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TotalActivitiesCard;
