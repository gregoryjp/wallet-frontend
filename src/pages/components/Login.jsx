import {
  Box,
  TextField,
  Card,
  Button,
  Typography,
  Avatar,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, isAuthenticated, errors: error } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (values) => {
    login(values);
  });

  useEffect(() => {
    if (isAuthenticated) navigate('user/account');
  }, [isAuthenticated]);

  return (
    <Box component="form" onSubmit={onSubmit}>
      <Card sx={{ borderRadius: 2, background: '#fff', width: 400 }}>
        <Box
          sx={{
            background: '#311b92',
            width: 160,
            color: '#fff',
            padding: 1,
            borderEndEndRadius: 5,
            textAlign: 'center',
          }}
        >
          <Typography component="h1">enter your account</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            padding: 2,
            mt: 3,
            justifyContent: 'center',
          }}
        >
          <Avatar
            // alt="Remy Sharp"
            // src="../../assets/img/logo513.png"
            sx={{
              width: 80,
              height: 80,
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

            gap: 1,
            padding: 4,
          }}
        >
          <TextField
            type="email"
            label="email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email && 'email is required'}
            {...register('email', { required: true })}
            autoComplete="current-password"
          />

          <TextField
            type="password"
            label="password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password && 'password is required'}
            {...register('password', { required: true })}
            autoComplete="current-password"
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1">Login</Typography>
          </Button>
        </Box>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          You dont have an account? <br />
          <Link to="/user/register">create Account</Link>
        </Typography>
        <Box
          component="p"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 300,
            padding: 2,
            color: '#f50057',
          }}
        >
          {error.error}
        </Box>
      </Card>
    </Box>
  );
};
