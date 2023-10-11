import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <Toolbar>
            <Typography variant="h5" textAlign="center">
              OinkBank
            </Typography>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};
