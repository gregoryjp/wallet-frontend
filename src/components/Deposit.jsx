import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

export const Deposit = () => {
  const { isDeposit } = useAuth();
  const [deposits, setDeposits] = useState([]);
  useEffect(() => {
    if (isDeposit) {
      setDeposits((prevDeposits) => [...prevDeposits, isDeposit]);
    }
  }, [isDeposit]);

  if (!isDeposit) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <TableContainer>
        <Table>
          <TableHead sx={{ background: '#311b92' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff' }}>#Transaction</TableCell>
              <TableCell sx={{ color: '#fff' }}>Currency</TableCell>
              <TableCell sx={{ color: '#fff' }}>Amount</TableCell>
              <TableCell sx={{ color: '#fff' }}>Taxe</TableCell>
              <TableCell sx={{ color: '#fff' }}>Total Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deposits.map((deposit) => (
              <TableRow
                key={deposit.transactionId}
                sx={{ background: '#84ffff', fontWeight: 'bold' }}
              >
                <TableCell>{deposit.transactionId}</TableCell>
                <TableCell>{deposit.currency || 'dolar'}</TableCell>
                <TableCell>${deposit.detail.amount}</TableCell>
                <TableCell>${deposit.detail.taxe.toFixed(1)}</TableCell>
                <TableCell>${deposit.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
