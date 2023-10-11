import {
  Box,
  Button,

  // IconButton,
  TextField,
  Typography,
} from '@mui/material';

import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { Deposit } from '../components/Deposit';
// import ClearIcon from '@mui/icons-material/Clear';
export const Transfer = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const { transfer, errors: error } = useAuth();

  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const onSubmit = handleSubmit(async (values) => {
    const res = await transfer(values);
    return res;
  });

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
        mb: 4,
        flexDirection: 'column',
      }}
    >
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          display: 'flex',
          gap: 2,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextField
          type="email"
          label="email"
          variant="outlined"
          // error={!!errors.email}
          // helperText={errors.email && 'email is required'}
          {...register('to', { required: true })}
        />
        <TextField
          type="text"
          label="currency"
          variant="outlined"
          // error={!!errors.email}
          // helperText={errors.email && 'email is required'}
          {...register('currency', { required: true })}
        />
        <TextField
          type="text"
          label="symbol"
          variant="outlined"
          // error={!!errors.email}
          // helperText={errors.email && 'email is required'}
          {...register('symbol', { required: true })}
        />
        <TextField
          type="text"
          label="amount"
          variant="outlined"
          // error={!!errors.email}
          // helperText={errors.email && 'email is required'}
          {...register('amount', { required: true })}
        />
        <TextField
          type="textarea"
          label="description"
          variant="outlined"
          multiline
          maxRows={4}
          sx={{ width: 231 }}
          // error={!!errors.email}
          // helperText={errors.email && 'email is required'}
          {...register('description', { required: true })}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={() => setIsComponentVisible(true)}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 231,
            mb: 4,
          }}
        >
          <Typography>Send</Typography>
        </Button>
        <Box component="h4" sx={{ color: '#f44336' }}>
          {error.error}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Box>{isComponentVisible && <Deposit />}</Box>
      </Box>
    </Box>
  );
};
