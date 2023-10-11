import { useEffect, useState } from 'react';

import { useAuth } from '../context/AuthContext';
import { Box, Button, Card, Divider, Typography } from '@mui/material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

import { Transaction } from './Transaction';
import { Transfer } from './Transfer';
import { GetDeposit } from './GetDeposit';

export const Balance = () => {
  const { account, setError } = useAuth();
  const [balance, setBalance] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const [component, setComponent] = useState(null);

  const handleDepositClick = () => {
    setIsComponentVisible(true);
    setComponent('Deposit');
  };

  const handleTransferClick = () => {
    setIsComponentVisible(true);
    setComponent('Transfer');
  };
  const handleMovementsClick = () => {
    setIsComponentVisible(true);
    setComponent('Movement');
  };

  useEffect(() => {
    async function axiosData() {
      try {
        const res = await account();
        const { balance, currency, symbol } = res;
        const newBalance = balance.toFixed(1);
        setBalance(newBalance);
        setCurrency(currency);
        setSymbol(symbol);
      } catch (error) {
        setError(error.response.data);
      }
    }
    axiosData();
  }, [account]);

  return (
    <Box sx={{}}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: 690,

          borderRadius: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mr: 2,
            alignItems: 'center',
          }}
        >
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
            <Typography variant="h6">Balance</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {' '}
            <Typography variant="bold1">
              AVAILABLE BALANCE IN {currency}
            </Typography>
          </Box>
        </Box>

        <Divider />
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              mt: 2,
            }}
          >
            <Typography variant="h4"> {symbol}</Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: 50,
                display: 'flex',
                justifyContent: 'end',
                mr: 4,
              }}
            >
              ${balance}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Button
              // key="deposit"
              // component="a"
              // href="/user/account"
              onClick={handleDepositClick}
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <VerticalAlignTopIcon />
              </Box>
              <Box>
                <Typography variant="bold1">deposit</Typography>
              </Box>
            </Button>

            <Button
              onClick={handleTransferClick}
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <SyncAltIcon />
              </Box>
              <Box>
                <Typography variant="bold1">Transfer</Typography>
              </Box>
            </Button>
            <Button
              onClick={handleMovementsClick}
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <CurrencyExchangeIcon />
              </Box>
              <Box>
                <Typography variant="bold1">Movements</Typography>
              </Box>
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box>
          {isComponentVisible && component === 'Deposit' && <Transaction />}
        </Box>
        <Box>
          {' '}
          {isComponentVisible && component === 'Transfer' && <Transfer />}
        </Box>
        <Box>
          {' '}
          {isComponentVisible && component === 'Movement' && <GetDeposit />}
        </Box>
      </Card>
    </Box>
  );
};
