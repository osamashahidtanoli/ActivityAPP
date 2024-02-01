import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { purple } from '@mui/material/colors';
import { Attendee } from 'core/types/type';
import React from 'react';

interface Props {
  attendees: Attendee[];
}

const ActivityAttendees = ({ attendees }: Props) => {
  return (
    <List
      sx={{
        width: '100%',
        mt: 5,
        maxHeight: 500,
        overflowY: 'auto',
        border: '1px solid #eee',
      }}
      subheader={
        <ListSubheader
          sx={{ color: '#8a8a8a', fontSize: '1.2rem', fontWeight: 'bold' }}
        >
          Attendees:
        </ListSubheader>
      }
    >
      {attendees.map((attendee) => (
        <React.Fragment key={attendee.userName}>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ background: purple[200] }} />
            </ListItemAvatar>
            <ListItemText>{attendee.displayName}</ListItemText>
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
};

export default ActivityAttendees;
