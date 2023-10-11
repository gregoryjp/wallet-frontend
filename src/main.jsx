import { createRoot } from 'react-dom/client';

import './index.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { App2 } from './App2.jsx';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#311b92',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#b388ff',
    },
    background: {
      default: '#eceff1',
    },
  },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App2 />
  </ThemeProvider>,
);
