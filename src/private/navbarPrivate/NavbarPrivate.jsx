import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { NavListDrawerPrivate } from './NavListDrawerPrivate';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaidIcon from '@mui/icons-material/Paid';
import SearchIcon from '@mui/icons-material/Search';

import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../../context/AuthContext';

const navLinks = [
  {
    title: 'Balance',
    path: '/user/account',
    icon: <AccountBalanceWalletIcon />,
  },
  {
    title: 'Transaction',
    path: '/user/transaction',
    icon: <PaidIcon />,
  },
  {
    title: 'Search Transaction',
    path: '/user/account',
    icon: <SearchIcon />,
  },

  {
    title: 'Logout',
    path: '/user/account',
    icon: <LogoutIcon />,
  },
];

export const NavbarPrivate = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleLogout = async () => {
    localStorage.removeItem('token');
    isAuthenticated(false);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            OinkBank
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component="a"
                href={item.title === 'Logout' ? '/' : item.path}
                onClick={item.title === 'Logout' ? handleLogout : null}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: 'flex', sm: 'none' } }}
      >
        <NavListDrawerPrivate navLinks={navLinks} />
      </Drawer>
    </>
  );
};
