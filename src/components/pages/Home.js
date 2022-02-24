import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useTransition, animated } from 'react-spring';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useWindowDimensions from '../GetWindow';
import UserAvatar from '../Avatarcard';
import Typography from '@mui/material/Typography';


export default function Home() {

  return (
    <Box sx={{
    bgColor: 'rgba(255,255,255,0)',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 'inherit',
    maxHeight: 'inherit',
     }}>
        <Typography>Hello World</Typography>
        
      <UserAvatar/>
    </Box>
  );
}