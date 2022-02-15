import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useWindowDimensions from '../GetWindow';



export default function Home() {
    const { height, width } = useWindowDimensions();

  return (
    <Box height='inherit' width={width} sx={{
    bgColor: 'rgba(255,255,255,0)',
     }}>
      
    </Box>
  );
}