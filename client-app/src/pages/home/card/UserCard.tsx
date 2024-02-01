import { Box, Grid, Typography } from '@mui/material';
import styles from '../Home.module.css';
import dayjs from 'dayjs';

interface Props {
  displayUserName: string;
}

const UserCard = ({ displayUserName }: Props) => {
  const currentDate = dayjs().format('dddd, D MM YYYY');

  return (
    <Grid item md={12} sm={12}>
      <Box sx={{ my: 5 }}>
        <Typography variant='h5' component='h5'>
          Hi <span className={styles.userName}>{displayUserName}</span>, Welcome
          Back
        </Typography>
        <p className={styles.date}>{currentDate}</p>
      </Box>
    </Grid>
  );
};

export default UserCard;
