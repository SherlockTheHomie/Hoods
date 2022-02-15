import React, { useState } from 'react';
import Menu from './Menu.js';
import Home from './pages/Home.js';
import Container from '@mui/material/Container';
import Street from './pages/Street.js';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from "@mui/material/CssBaseline";
import background from "../static/images/background.jpg";

const theme = createTheme ({
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
        paper: '#48b0ff',
        default: '#000000',
      },
      error: {
        main: '#d60e00',
        contrastText: '#e2e2e2',
      },
      text: {
        primary: '#000000',
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
  });

const lightTheme = createTheme({ palette: { mode: 'light' } });
  
const styles = {
    paperContainer: {
      maxHeight: '400',
      maxWidth: '700',
      backgroundImage: `url(${background})`,
    }
};


export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home/>;
      }
        return <Street/>;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
    
  
    return (
      <ThemeProvider theme={theme}>
          <Container sx={{ 
              minWidth: 700,
              minHeight: 400,
              height: 400, 
              width: 700}}>
          <CssBaseline/>
        <Paper style={styles.paperContainer}>
        <Menu currentPage={currentPage} handlePageChange={handlePageChange} sx={{maxWidth: 700}}/>
                 
        {renderPage()}
            </Paper>
          </Container>
      </ThemeProvider>
    );

}
