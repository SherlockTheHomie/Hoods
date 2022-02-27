import * as React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider } from './utils/AuthContext';
// import { db } from './firebase/firebase';
// import { collection, getDocs } from 'firebase/firestore';

import Hood from './components/Hood';
import SignupSplash from './components/pages/Signup';
import LoginSplash from './components/pages/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/pages/ForgotPassword';
import UpdateProfile from './components/pages/UpdateProfile';

import '@use-gesture/react';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import useWindowDimensions from './components/GetWindow';



const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#346eff',
      contrastText: '#eeeeee',
    },
    secondary: {
      main: '#346eff',
      contrastText: '#346eff',
      dark: '#346eff',
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



function App() {

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
        <AuthProvider>
          <Routes>
            <Route path="/" element={<PrivateRoute><Hood/></PrivateRoute>} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/signup" element={<SignupSplash />} />
            <Route path="/login" element={<LoginSplash />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

          </Routes>
        </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
