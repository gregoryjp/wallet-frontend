import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
import {
  Box,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

export const GetDeposit = () => {
  const { getDeposit, setErrors } = useAuth();
  const [depositos, setDepositos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    async function axiosData() {
      try {
        const res = await getDeposit();
        console.log(res);
        setDepositos(res);
      } catch (error) {
        setErrors(error.response.data);
      }
    }
    axiosData();
  }, []);

  useEffect(() => {
    console.log('cambio la pagina');
  }, [currentPage]);

  const handlePageChange = async (event, page) => {
    const data = await getDeposit(page);

    // Captura el número de página y muestra en la consola
    console.log(`Página ${page} presionada`);
    setCurrentPage(page); // Actualiza el estado actual de la página
    setDepositos(data); // Actualiza los datos de la página
  };

  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#Transaction</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Taxe</TableCell>
            <TableCell>Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {depositos.map((deposito) => (
            <TableRow key={deposito.transactionId}>
              <TableCell>{deposito.transactionId}</TableCell>
              <TableCell>{deposito.type}</TableCell>
              <TableCell>{deposito.description}</TableCell>
              <TableCell>{deposito.currency}</TableCell>
              <TableCell>${deposito.detail.amount}</TableCell>
              <TableCell>${deposito.detail.taxe.toFixed(1)}</TableCell>
              <TableCell>${deposito.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box>
        <Box>
          {' '}
          <Stack
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Pagination
              count={10}
              color="primary"
              page={currentPage} // Establece la página actual
              onChange={handlePageChange} // Usa el manejador de eventos
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
