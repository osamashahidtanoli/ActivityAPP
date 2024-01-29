import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';
import PageLoader from 'components/layout/PageLoader';
import activityBg from 'assets/music.jpg';
import { useGetActivityQuery } from 'core/api/activities';
import { useParams } from 'react-router-dom';
import { Activity, Attendee } from 'core/types/type';
import AddIcon from '@mui/icons-material/Add';
import ActivityAttendees from './ActivityAttendees';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import useActivity from 'pages/activity/useActivity';
import styles from './ActivityDetail.module.css';

const ActivityDetail = () => {
  const params = useParams();
  const {
    data = {} as Activity,
    isError,
    isLoading,
  } = useGetActivityQuery(params.id ?? '');

  const {
    id = '',
    hostUserName = '',
    date = '',
    venue = '',
    city = '',
    description = '',
    title = '',
    category = '',
    attendees = [] as Attendee[],
  } = data;

  const { activityDate, activityOwner, activityAttending, onAttendanceUpdate } =
    useActivity(date, hostUserName, attendees);

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError)
    return (
      <Alert sx={{ my: 5 }} severity='error'>
        Activity Id is not valid.
      </Alert>
    );

  const isTheUserAttendingActivity = !activityOwner && activityAttending;
  const isTheUserNotAttendingActivity = !activityOwner && !activityAttending;

  const details = [
    { label: 'Title', value: title },
    { label: 'Host Name', value: hostUserName },
    { label: 'Activity Date', value: activityDate },
    { label: 'Venue', value: `${venue}, ${city}` },
    { label: 'Description', value: description },
    { label: 'Category', value: category },
  ];

  const onUpdateAttendance = (type: string) => () => {
    onAttendanceUpdate({ id: id, type });
  };

  return (
    <Grid container columnSpacing={3}>
      <Grid item md={8}>
        <Card sx={{ my: 5 }}>
          <CardMedia image={activityBg} className={styles.activityBg} />
          <CardContent>
            {details.map(({ label, value }) => (
              <Box
                key={label}
                display={'flex'}
                justifyContent={'space-between'}
                mb={2}
              >
                <div className={styles.label}>{label}:</div>
                <div className={styles.hostNameText}>{value}</div>
              </Box>
            ))}
          </CardContent>
          <CardActions>
            {activityOwner && (
              <Button
                startIcon={<DeleteIcon />}
                variant='contained'
                color='error'
                onClick={onUpdateAttendance('leave')}
              >
                Cancel this event
              </Button>
            )}
            {isTheUserNotAttendingActivity && (
              <Button
                startIcon={<AddIcon />}
                variant='contained'
                color='primary'
                onClick={onUpdateAttendance('join')}
              >
                Attend this Activity
              </Button>
            )}
            {isTheUserAttendingActivity && (
              <Button
                startIcon={<LogoutIcon />}
                variant='contained'
                color='secondary'
                onClick={onUpdateAttendance('leave')}
              >
                Leave this Activity
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
      <Grid item md={4}>
        <ActivityAttendees attendees={attendees} />
      </Grid>
    </Grid>
  );
};

export default ActivityDetail;
