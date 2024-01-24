import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import { Activity } from 'core/types/type';
import { formatDate, getInitials } from 'utils/utils';

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
  const activityDate = formatDate(date);
  const activityHost = getInitials(hostUserName);

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
        titleTypographyProps={{ fontSize: '1rem', fontWeight: 'bold' }}
        action={
          <IconButton aria-label='settings' sx={{ color: '#8561c5' }}>
            <VisibilityIcon />
          </IconButton>
        }
      />
      <CardContent>{description}</CardContent>
      <CardActions>
        <Chip
          color='primary'
          label={`${venue}, ${city}`}
          icon={<AddLocationIcon />}
        />
        <Chip
          color='primary'
          label={attendees?.length || 0}
          icon={<GroupIcon />}
        />
        <Chip color='primary' label={category} icon={<CategoryIcon />} />
      </CardActions>
    </Card>
  );
};

export default ActivityList;
