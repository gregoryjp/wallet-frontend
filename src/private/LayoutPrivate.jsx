import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { NavbarPrivate } from './navbarPrivate/NavbarPrivate';

const LayoutPrivate = () => {
  return (
    <div>
      <NavbarPrivate />
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

export default LayoutPrivate;
