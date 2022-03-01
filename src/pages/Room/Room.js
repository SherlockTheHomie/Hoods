import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useTransition, animated } from 'react-spring';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useWindowDimensions from '../../GetWindow';
import '../hood.css';
import UserAvatar from '../../Avatarcard';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


import { useAuth } from '../../../utils/AuthContext';



export default function Room() {

  const [error, setError] = useState("")
  const { signOut } = useAuth();
  const navigate = useNavigate();
  
  const { height, width } = useWindowDimensions();
  
  async function handleLogout() { 
      setError('')
      try {
        await signOut()
        navigate('/login')
      } catch {
        setError('failed to logout')
      }
    }



  return (
        
       <Grid container className="myHood" sx={{
        display: 'flex',
        bgColor: 'rgba(255,255,255,0.00)',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: width,
        maxHeight: height,
        padding: 0,
        margin: 0,
      }}>
         <Grid item xs={3}>
         <Typography>Hello World</Typography>
         </Grid>
         <Grid item xs={3}>
         <Typography>Hello World</Typography>
         </Grid>
         <Grid item xs={3}>
         <Typography>Hello World</Typography>
         </Grid>
         <Grid item xs={3}>
         <Button >Log Out</Button>
         </Grid>
         <Grid item xs={3}>
         <UserAvatar/>
         </Grid>
         <Grid item xs={3}>
         <UserAvatar/>
         </Grid>
         <Grid item xs={3}>
         <UserAvatar/>
         </Grid>
         <Grid item xs={3}>
         <Button >Log Out</Button>
         </Grid>
       </Grid>
  );
}