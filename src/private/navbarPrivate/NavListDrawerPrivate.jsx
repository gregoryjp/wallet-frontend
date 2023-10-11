import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useAuth } from '../../context/AuthContext';
export const NavListDrawerPrivate = ({ navLinks }) => {
  const { isAuthenticated } = useAuth();
  const handleLogout = async () => {
    localStorage.removeItem('token');
    isAuthenticated(false);
  };
  return (
    <Box sx={{ width: 250, bgcolor: 'inherit' }}>
      <Divider />
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton
                component="a"
                href={item.title === 'Logout' ? '/' : item.path}
                onClick={item.title === 'Logout' ? handleLogout : null}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

NavListDrawerPrivate.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
