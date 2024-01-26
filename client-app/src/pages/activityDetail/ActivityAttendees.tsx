import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { Attendee } from 'core/types/type';
import React from 'react';

interface Props {
  attendees: Attendee[];
}

const ActivityAttendees = ({ attendees }: Props) => {
  return (
    <React.Fragment>
      {/* <Typography variant='h5' component='h5' sx={{ mt: 5 }}>
        Activity Attendees:
      </Typography> */}
      <List sx={{ width: '100%', mt: 5 }}>
        {attendees.map((attendee) => (
          <React.Fragment key={attendee.userName}>
            <ListItem
              sx={{ background: '#673ab7', color: '#fff', fontWeight: 'bold' }}
            >
              <ListItemAvatar>
                <Avatar sx={{ background: '#8561c5' }} />
              </ListItemAvatar>
              <ListItemText>{attendee.displayName}</ListItemText>
            </ListItem>
            <Divider component='li' />
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  );
};

export default ActivityAttendees;
