import { Avatar, Box, Card, CardContent, Grid } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import styles from '../Home.module.css';
import { purple } from '@mui/material/colors';

interface Props {
  totalFollowers: number;
}

const TotalFollowersCard = ({ totalFollowers }: Props) => {
  return (
    <Grid item md={4} sm={6}>
      <Card>
        <CardContent>
          <Box display={'flex'} columnGap={2}>
            <Avatar sx={{ bgcolor: purple[500], width: 60, height: 60 }}>
              <GroupIcon />
            </Avatar>
            <div>
              <p className={styles.cardLabelInfo}>My Total Followers</p>
              <h3 className={styles.cardValue}>{totalFollowers}</h3>
            </div>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TotalFollowersCard;
