import styled from '@emotion/styled';
import { Box, Button, Input, Paper, Typography } from '@mui/material';

export const Product = () => {
  const Img = styled('img')({
    width: 200,
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  });
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        overflow: 'hidden',
        mt: 5,
        width: 600,
        height: 200,
      }}
    >
      <Img src="https://via.placeholder.com/200" alt="mi imagen" />
      <Box sx={{ flexGrow: 1, display: 'grid', gap: 4 }}>
        <Typography variant="h4">
          <Input type="text" placeholder="titulo del plato"></Input>
        </Typography>
        <Typography variant="body1">
          <textarea placeholder="description del plato"></textarea>
        </Typography>
        <Button variant="contained"> Add Card</Button>
      </Box>
      <Box sx={{ mr: 2 }} component="p">
        <Input type="text" placeholder="precio"></Input>
      </Box>
    </Paper>
  );
};
