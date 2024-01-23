import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Activity } from 'core/types/type';
import { formatDate, getInitials } from 'utils/utils';

interface Props {
  activity: Activity;
}

const ActivityList = ({ activity }: Props) => {
  const { title, date, description, hostUserName } = activity;
  const activityDate = formatDate(date);
  const activityHost = getInitials(hostUserName);

  return (
    <Card sx={{ my: 5, backgroundColor: '#8561c5', color: '#ffffff' }}>
      <CardHeader
        avatar={<Avatar sx={{ background: '#673ab7' }}>{activityHost}</Avatar>}
        title={title}
        subheader={activityDate}
        subheaderTypographyProps={{ color: '#fff', fontSize: '0.7rem' }}
        titleTypographyProps={{ fontSize: '1rem', fontWeight: 'bold' }}
        action={
          <IconButton aria-label='settings' sx={{ color: '#fff' }}>
            <VisibilityIcon />
          </IconButton>
        }
      />
      <CardContent>{description}</CardContent>
      <CardActions disableSpacing>
        <IconButton sx={{ color: '#fff' }}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ActivityList;
