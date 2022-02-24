import ReactDOM from 'react-dom';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from './utils/AuthContext';
import { db } from './firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

import Hood from './components/Hood';
import SignupSplash from './components/pages/Signup';
import LoginSplash from './components/pages/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/pages/ForgotPassword';
import UpdateProfile from './components/pages/UpdateProfile';

import '@use-gesture/react';
import './App.css';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import useWindowDimensions from './components/GetWindow';



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

function App(props) {

  const { height, width } = useWindowDimensions();

  // const [ users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, "users");

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  //   }

  //   getUsers()
  // }, [])


  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AuthProvider>
          <Switch>
            <Paper className='root' style={styles.paperContainer} sx={{
              bgcolor: 'rgba(255,255,255,0.00)',
              maxWidth: { width },
              maxHeight: { height },
              padding: 0,
              margin: 0,
            }}>
              <PrivateRoute exact path="/" component={Hood} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={SignupSplash} />
              <Route path="/login" component={LoginSplash} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Paper>
          </Switch>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
