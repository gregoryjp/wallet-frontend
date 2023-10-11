import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Navbar } from './components/navbar/Navbar';

const LayoutPublic = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Container
          sx={{
            mt: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default LayoutPublic;
