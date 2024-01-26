import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'core/constants/constant';
import React from 'react';
import { useAppDispatch } from 'core/store/store';
import {
  resetActivityFilter,
  setGoing,
  setHost,
} from 'core/slice/activitySlice';

const ActivityFilter = () => {
  const [value, setValue] = React.useState('all');
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setValue(value);

    if (value === 'all') {
      dispatch(resetActivityFilter());
    } else if (value === 'myActivities') {
      dispatch(setHost());
    } else {
      dispatch(setGoing());
    }
  };

  const navigate = useNavigate();

  const navigateToCreateActivity = () => {
    navigate(ROUTES.CreateActivity);
  };

  return (
    <>
      <Card sx={{ my: 5 }}>
        <CardContent>
          <Typography
            variant='h5'
            component='h5'
            sx={{
              color: '#673ab7',
              fontWeight: 'bold',
              letterSpacing: '0.2rem',
              mb: 2,
            }}
          >
            Filter Activities
          </Typography>
          <RadioGroup defaultValue='all' value={value} onChange={handleChange}>
            <FormGroup>
              <FormControlLabel
                value='all'
                control={<Radio />}
                sx={{ color: '#8561c5' }}
                label='All Activities'
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                value='myActivities'
                control={<Radio />}
                sx={{ color: '#8561c5' }}
                label='My Activites'
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                value='attending'
                control={<Radio />}
                sx={{ color: '#8561c5' }}
                label='Activities I am Attending'
              />
            </FormGroup>
          </RadioGroup>

          <Typography
            variant='h5'
            component='h5'
            sx={{
              color: '#673ab7',
              fontWeight: 'bold',
              letterSpacing: '0.2rem',
              my: 2,
            }}
          >
            Create New Activity
          </Typography>
          <Button
            variant='contained'
            color='primary'
            onClick={navigateToCreateActivity}
          >
            Create
          </Button>
        </CardContent>
      </Card>
      <Box sx={{ border: '1px solid #eee', borderRadius: '10px' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </Box>
    </>
  );
};

export default ActivityFilter;
