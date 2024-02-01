import { Avatar, Box, Card, CardContent, Grid } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import styles from '../Home.module.css';
import { orange } from '@mui/material/colors';

interface Props {
  totalFollowing: number;
}

const TotalUsersCard = ({ totalFollowing }: Props) => {
  return (
    <Grid item md={4} sm={6}>
      <Card>
        <CardContent>
          <Box display={'flex'} columnGap={2}>
            <Avatar sx={{ bgcolor: orange[500], width: 60, height: 60 }}>
              <GroupIcon />
            </Avatar>
            <div>
              <p className={styles.cardLabelInfo}>My Total Following</p>
              <h3 className={styles.cardValue}>{totalFollowing}</h3>
            </div>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TotalUsersCard;
