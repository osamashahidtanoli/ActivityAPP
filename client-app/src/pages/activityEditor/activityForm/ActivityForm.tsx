import { Box, Button } from '@mui/material';
import DateInputController from 'components/reactHookForm/DateInputController';
import TextInputController from 'components/reactHookForm/TextInputController';
import { usePostActivityMutation } from 'core/api/activities';
import { ROUTES } from 'core/constants/constant';
import { showBar } from 'core/slice/commonSlice';
import { useAppDispatch } from 'core/store/store';
import { ActivityCreateForm } from 'core/types/type';
import dayjs from 'dayjs';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const ActivityForm = () => {
  const method = useForm<ActivityCreateForm>({ mode: 'onChange' });
  const { handleSubmit } = method;
  const [createActivity] = usePostActivityMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const submitForm: SubmitHandler<ActivityCreateForm> = async (data) => {
    const result = await createActivity({
      ...data,
      id: uuid(),
      date: dayjs(data.date).toISOString(),
    });

    if ('error' in result) {
      dispatch(
        showBar({
          isOpen: true,
          message: 'Something Went Wrong, Please try again',
          type: 'error',
        }),
      );
    } else {
      navigate(ROUTES.Activities);
      dispatch(
        showBar({
          isOpen: true,
          message: 'Successfully Created a new Activity',
          type: 'success',
        }),
      );
    }
  };

  const navigateToActivities = () => {
    navigate(ROUTES.Activities);
  };

  return (
    <Box sx={{ my: 2, px: 2 }}>
      <FormProvider {...method}>
        <form onSubmit={handleSubmit(submitForm)}>
          <TextInputController
            name='title'
            isRequired
            placeholder='Title'
            type='text'
            sx={{ mb: 2 }}
          />
          <TextInputController
            name='description'
            isRequired
            placeholder='Description'
            type='text'
            sx={{ mb: 2 }}
            multiline
          />
          <TextInputController
            name='category'
            isRequired
            placeholder='Category'
            type='text'
            sx={{ mb: 2 }}
          />
          <TextInputController
            name='city'
            isRequired
            placeholder='City'
            type='text'
            sx={{ mb: 2 }}
          />
          <TextInputController
            name='venue'
            isRequired
            placeholder='Venue'
            type='text'
            sx={{ mb: 2 }}
          />
          <DateInputController
            name='date'
            isRequired
            placeholder='Activity Date'
            sx={{ mb: 3, width: '100%' }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              type='button'
              variant='contained'
              color='info'
              onClick={navigateToActivities}
            >
              Back to Activities
            </Button>
            <Button type='submit' variant='contained'>
              Create Activity
            </Button>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};

export default ActivityForm;
