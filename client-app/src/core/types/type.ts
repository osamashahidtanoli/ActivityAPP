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

  export interface UserLoginPayload {
    password: string;
    email: string;
  }

  export interface UserLoginResponse {
    token: string;
    userName: string;
    displayName: string;
    image: string;
  }

  export interface AuthState {
    token: string | null;
    userName: string | null;
    displayUserName: string | null;
    imageUrl: string | null;
  }

  export interface AuthPayload {
    token: string;
    userName: string;
    displayUserName: string;
    imageUrl: string;
  }

  export interface ActivityGetRequest {
    IsHost?: boolean;
    IsGoing?: boolean;
    StartDate?: string;
    PageNumber?: number;
    PageSize?: number;
  }

  
  
  