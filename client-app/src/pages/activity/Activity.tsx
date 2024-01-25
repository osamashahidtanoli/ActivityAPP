import { Alert, Box, CircularProgress, Grid } from '@mui/material';
import ActivityList from 'pages/activity/activityList/ActivityList';
import { useGetActivitiesQuery } from 'core/api/activities';
import ActivityFilter from './filter/ActivityFilter';
import { useAppSelector } from 'core/store/store';
import { getActivityFiler } from 'core/selectors/selectors';

const Activity = () => {
  const activityFiler = useAppSelector(getActivityFiler);
  const { data, isLoading, isError } = useGetActivitiesQuery(activityFiler);
  const isDataAvailable = data?.length !== 0;

  if (isError)
    return (
      <Alert sx={{ my: 5 }} severity='error'>
        API Failed
      </Alert>
    );

  if (isLoading)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Grid container columnSpacing={5}>
      <Grid item md={7} sm={12}>
        {isDataAvailable &&
          data?.map((activity) => (
            <ActivityList activity={activity} key={activity.id} />
          ))}
        {!isDataAvailable && (
          <Alert sx={{ my: 5 }} severity='warning'>
            No Record Found
          </Alert>
        )}
      </Grid>
      <Grid item md={4} sm={12}>
        <ActivityFilter />
      </Grid>
    </Grid>
  );
};

export default Activity;
