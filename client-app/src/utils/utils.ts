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
