import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
} from '@mui/material';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import GroupIcon from '@mui/icons-material/Group';
import { Activity } from 'core/types/type';
import useActivity from '../useActivity';
import { useNavigate } from 'react-router-dom';

interface Props {
  activity: Activity;
}

const ActivityList = ({ activity }: Props) => {
  const {
    title,
    date,
    description,
    hostUserName,
    venue,
    city,
    attendees,
    category,
  } = activity;

  const {
    activityDate,
    activityAttending,
    activityHost,
    onAttendanceUpdate,
    activityOwner,
  } = useActivity(date, hostUserName, attendees);

  const navigate = useNavigate();

  const updateUserAttendace = (type: string) => () => {
    onAttendanceUpdate({ id: activity.id, type: type });
  };

  const navigateToActivityDetail = () => {
    navigate(`/ActivityDetail/${activity.id}`);
  };

  return (
    <Card
      sx={{
        my: 5,
        backgroundColor: '#ffffff',
        color: '#8561c5',
        border: '1px solid #8561c5',
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ background: '#673ab7' }}>{activityHost}</Avatar>}
        title={title}
        subheader={activityDate}
        subheaderTypographyProps={{ color: '#8561c5', fontSize: '0.7rem' }}
        titleTypographyProps={{
          fontSize: '1rem',
          fontWeight: 'bold',
        }}
        action={
          !activityAttending ? (
            <Button
              size='small'
              color='primary'
              variant='contained'
              onClick={updateUserAttendace('join')}
            >
              Participate
            </Button>
          ) : (
            <Button
              size='small'
              color={activityOwner ? 'error' : 'info'}
              variant='contained'
              onClick={updateUserAttendace('leave')}
            >
              {activityOwner ? 'Cancel This Activity' : 'Withdraw'}
            </Button>
          )
        }
      />
      <CardContent>{description}</CardContent>
      <CardActions>
        <Chip
          color='primary'
          variant='outlined'
          label={`${venue}, ${city}`}
          icon={<AddLocationIcon />}
          size='small'
          sx={{ borderRadius: '5px' }}
        />
        <Chip
          color='primary'
          variant='outlined'
          label={attendees?.length || 0}
          icon={<GroupIcon />}
          size='small'
          sx={{ borderRadius: '5px' }}
        />
        <Chip
          color='primary'
          variant='outlined'
          label={category}
          size='small'
          sx={{ borderRadius: '5px' }}
        />
        <Chip
          color='primary'
          variant='filled'
          label='View More Info'
          size='small'
          sx={{ borderRadius: '5px' }}
          onClick={navigateToActivityDetail}
        />
      </CardActions>
    </Card>
  );
};

export default ActivityList;
