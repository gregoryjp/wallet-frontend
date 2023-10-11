import {
  Button,
  Container,
  TextField,
  Box,
  Typography,
  Grid,
} from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Product } from './components/Product';
import { Carde } from './components/Carde';
function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} ms={6}>
          <h1>Hola mundo</h1>
          <Button
            variant="contained"
            color="error"
            endIcon={<LoginOutlinedIcon />}
          >
            login
          </Button>

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
            />
          </Box>

          <Typography variant="h6" textAlign="center">
            App h1 con component!!
          </Typography>

          <Product />

          <Carde />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
