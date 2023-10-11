import { Box, TextField, Card, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const RegisterCompany = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notify = () => toast.success('Successful registration');
  const { registerCompanies, errors: error, company } = useAuth();
  useEffect(() => {
    if (company) {
      notify();
    }
  }, [company]);
  const onSubmit = handleSubmit(async (values) => {
    registerCompanies(values);
  });
  return (
    <Box>
      <Toaster position="top-right" duration="5000" reverseOrder={false} />
      <Box component="form" onSubmit={onSubmit}>
        <Card sx={{ borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box
              sx={{
                background: '#311b92',
                display: 'flex',
                justifyContent: 'start',
                color: '#fff',
                width: 150,
                padding: 1,
                borderEndEndRadius: 5,
                textAlign: 'center',
              }}
            >
              <Typography component="h1">Register Company</Typography>
            </Box>
            <Box
              sx={{
                background: '#311b92',
                display: 'flex',
                justifyContent: 'flex-end',
                color: '#fff',
                width: 150,
                padding: 1,
                borderEndStartRadius: 5,
                textAlign: 'center',
              }}
            >
              <Link to="/">
                {' '}
                <Typography component="h1" sx={{ color: '#fff' }}>
                  I have an account
                </Typography>
              </Link>{' '}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              color: 'red',
              width: 350,
              textAlign: 'center',
            }}
          >
            <Box component="p">{error && error.error}</Box>
          </Box>
          <Box
            sx={{
              mt: 2,
              display: 'flex',
              flexDirection: 'column',
              padding: '40px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <TextField
                type="text"
                label="name"
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name && 'name is required'}
                {...register('name', { required: true })}
                autoComplete="current-name"
              />

              <TextField
                type="text"
                label="dni"
                variant="outlined"
                error={!!errors.taxIdNumber}
                helperText={errors.taxIdNumber && 'dni is required'}
                {...register('taxIdNumber', { required: true })}
                autoComplete="current-dni"
              />
              <TextField
                type="email"
                label="email"
                variant="outlined"
                error={!!errors.email}
                {...register('email', { required: true })}
                autoComplete="current-email"
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
              <TextField
                type="text"
                label="country"
                variant="outlined"
                error={!!errors.country}
                helperText={errors.country && 'country is required'}
                {...register('country', { required: true })}
              />
              <TextField
                type="text"
                label="address"
                variant="outlined"
                error={!!errors.address}
                helperText={errors.address && 'address is required'}
                {...register('address', { required: true })}
              />
            </Box>

            <Box
              sx={{
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                type="submit"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '300px',
                }}
              >
                <Typography variant="body1">REGISTER</Typography>
              </Button>
              <Typography variant="body1" sx={{ mt: 2 }}>
                If you are a company, <Link to="/user/register">register</Link>{' '}
                here!
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
