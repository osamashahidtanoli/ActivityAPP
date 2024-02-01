import { Alert, Grid } from '@mui/material';
import ActivityList from 'pages/activity/activityList/ActivityList';
import { useGetActivitiesQuery } from 'core/api/activities';
import ActivityFilter from './filter/ActivityFilter';
import { useAppSelector } from 'core/store/store';
import { getActivityFiler } from 'core/selectors/selectors';
import PageLoader from 'components/layout/PageLoader';

const Activity = () => {
  const activityFiler = useAppSelector(getActivityFiler);
  const { data, isLoading, isError } = useGetActivitiesQuery(activityFiler);
  const isDataAvailable = data?.length !== 0;

  if (isError)
    return (
      <Alert sx={{ my: 5 }} severity='error'>
        {!isDataAvailable ? 'No Record Found' : 'Something Went Wrong'}
      </Alert>
    );

  if (isLoading) return <PageLoader />;

  return (
    <Grid container columnSpacing={5}>
      <Grid item md={7} sm={12}>
        {isDataAvailable &&
          data?.map((activity) => (
            <ActivityList activity={activity} key={activity.id} />
          ))}
      </Grid>
      <Grid item md={4} sm={12}>
        <ActivityFilter />
      </Grid>
    </Grid>
  );
};

export default Activity;
