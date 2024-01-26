import { useUpdateAttendanceMutation } from 'core/api/activities';
import { getCurrentUser } from 'core/selectors/selectors';
import { useAppSelector } from 'core/store/store';
import { Attendee } from 'core/types/type';
import {
  formatDate,
  getInitials,
  isActivityOwner,
  isAttending,
} from 'utils/utils';

const useActivity = (
  date: string,
  hostUserName: string,
  attendees: Attendee[],
) => {
  const { userName } = useAppSelector(getCurrentUser);
  const activityDate = formatDate(date);
  const activityHost = getInitials(hostUserName);
  const activityOwner = isActivityOwner(hostUserName, userName);
  const activityAttending = isAttending(attendees, userName);
  const [onAttendanceUpdate] = useUpdateAttendanceMutation();

  return {
    activityDate,
    activityHost,
    activityOwner,
    activityAttending,
    onAttendanceUpdate,
  };
};

export default useActivity;
