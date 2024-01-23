import { Alert, Grid, Skeleton } from '@mui/material';
import ActivityList from 'components/activityList/ActivityList';
import { useGetActivitiesQuery } from 'core/api/activities';
import { Activity } from 'core/types/type';

const activityData = {} as Activity;

const Activity = () => {
  const { data, isLoading, isError } = useGetActivitiesQuery();

  if (isError)
    return (
      <Alert sx={{ my: 5 }} severity='error'>
        API Failed
      </Alert>
    );

  if (isLoading)
    return (
      <Skeleton variant='rectangular' height={300} width='auto'>
        <ActivityList activity={activityData} />
      </Skeleton>
    );

  if (data?.length === 0 && !isLoading && !isError)
    return <p>No record Found</p>;

  return (
    <Grid container>
      <Grid item md={8}>
        {data?.map((activity) => (
          <ActivityList activity={activity} key={activity.id} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Activity;
