import { Alert, Grid } from '@mui/material';
import UserCard from './card/UserCard';
import TotalActivitiesCard from './card/TotalActivitiesCard';
import TotalUsersCard from './card/TotalUsersCard';
import TotalFollowersCard from './card/TotalFollowersCard';
import { useGetUserProfileQuery } from 'core/api/activities';
import { useAppSelector } from 'core/store/store';
import { getCurrentUser } from 'core/selectors/selectors';
import PageLoader from 'components/layout/PageLoader';
import { ProfileResponse } from 'core/types/type';

const Home = () => {
  const { userName } = useAppSelector(getCurrentUser);
  const {
    data = {} as ProfileResponse,
    isLoading,
    isError,
  } = useGetUserProfileQuery(userName ?? '');

  if (isLoading) return <PageLoader />;

  if (isError) return <Alert>Something Went wrong</Alert>;

  const { displayName, followerCount, followingCount, totalActivities } = data;

  return (
    <Grid container spacing={3}>
      <UserCard displayUserName={displayName} />
      <TotalActivitiesCard totalActivities={totalActivities} />
      <TotalUsersCard totalFollowing={followingCount} />
      <TotalFollowersCard totalFollowers={followerCount} />
    </Grid>
  );
};

export default Home;
