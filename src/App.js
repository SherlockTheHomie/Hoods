import ReactDOM from 'react-dom';
import * as React from 'react';
import './App.css';
import Hood from "./components/Hood";
import Paper from '@mui/material/Paper';
import background from "./static/images/background.jpg";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import useWindowDimensions from './components/GetWindow';
import { requirePropFactory } from '@mui/material';


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#346eff',
      contrastText: '#346eff',
    },
    secondary: {
      main: '#346eff',
      contrastText: '#000000',
      dark: '#000000',
    },
    background: {
      paper: 'rgba(0,0,0,0.50)',
      default: '#000000',
    },
    error: {
      main: '#d60e00',
      contrastText: '#e2e2e2',
    },
    text: {
      primary: '#acff00',
      secondary: '#f7f5f5',
    },
  },
  typography: {
    fontFamily: 'monospace',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  root: {
    "& .MuiPaper-root": {
      padding: 0,
      height: '100vh',
      width: '100vw',
      backgroundrepeat: 'no-repeat',
      backgroundposition: 'center',
    }
  }
});

const styles = {
  paperContainer: {
    position: 'center',
  }
};

function App() {

  const { height, width } = useWindowDimensions();


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />     
          
            <Paper className='root' style={styles.paperContainer} sx={{
              bgcolor: 'rgba(255,255,255,0.00)',
              width: {width},
              height: {height},
              padding: 0,
              margin: 0,
            }}>
            <Hood />
          </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
