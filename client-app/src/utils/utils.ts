import { Activity, Attendee, AuthState } from "core/types/type";

export const getInitials = (name: string) => {
    if(!name) return 'NA'
    const words = name?.split(' ');
    const initials = words?.map((word) => word.charAt(0).toUpperCase());
    return initials.join('');
  }

  export const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const options = { month: 'long', day: 'numeric', year: 'numeric' } as any;
    return date.toLocaleDateString('en-US', options);
  }

  export const isActivityOwner = (activityHostUserName: string, loginUserName: string | null = '') => {
    if(activityHostUserName === loginUserName) return true;
     
    return false;
  }

  export const isAttending = (attendees: Attendee[], loginUserName: string | null = '') => {
    return attendees.some(attendee => attendee.userName === loginUserName);
  }
