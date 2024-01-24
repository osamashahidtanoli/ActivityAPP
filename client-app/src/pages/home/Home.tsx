import { Grid } from '@mui/material';
import UserCard from './card/UserCard';
import TotalActivitiesCard from './card/TotalActivitiesCard';
import TotalUsersCard from './card/TotalUsersCard';
import TotalFollowersCard from './card/TotalFollowersCard';

const Home = () => {
  return (
    <Grid container spacing={3}>
      <UserCard />
      <TotalActivitiesCard />
      <TotalUsersCard />
      <TotalFollowersCard />
    </Grid>
  );
};

export default Home;
