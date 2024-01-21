export interface Attendee {
    userName: string;
    displayName: string;
    bio: string | null;
    image: string | null;
    following: boolean;
    followerCount: number;
    followingCount: number;
  }
  
  export interface Activity {
    id: string;
    title: string;
    date: string;
    description: string;
    category: string;
    city: string;
    venue: string;
    isCancelled: boolean;
    hostUserName: string;
    attendees: Attendee[];
  }
  
  