import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';

const ActivityFilter = () => {
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
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              sx={{ color: '#8561c5' }}
              label='My Activites'
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              sx={{ color: '#8561c5' }}
              label='Activities I am Attending'
            />
          </FormGroup>

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
          <Button variant='outlined'>Create</Button>
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
