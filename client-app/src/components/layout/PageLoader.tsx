import { Box, CircularProgress } from '@mui/material';

const PageLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default PageLoader;
