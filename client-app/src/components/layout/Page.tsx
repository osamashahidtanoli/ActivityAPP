import { Container, ThemeProvider } from '@mui/material';
import theme from 'core/style/theme';
import { ReactNode } from 'react';
import ResponsiveAppBar from './Navbar';

interface Props {
  children: ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Container maxWidth='lg'>{children}</Container>
    </ThemeProvider>
  );
};

export default Page;
