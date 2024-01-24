import { Alert, Box, CircularProgress, Grid } from '@mui/material';
import ActivityList from 'pages/activity/activityList/ActivityList';
import { useGetActivitiesQuery } from 'core/api/activities';
import ActivityFilter from './filter/ActivityFilter';

const Activity = () => {
  const { data, isLoading, isError, refetch } = useGetActivitiesQuery({});

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

  if (data?.length === 0 && !isLoading && !isError)
    return (
      <Alert sx={{ my: 5 }} severity='info'>
        No Result Found
      </Alert>
    );

  return (
    <Grid container columnSpacing={5}>
      <Grid item md={7} sm={12}>
        {data?.map((activity) => (
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
