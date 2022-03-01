import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useTransition, animated } from 'react-spring';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DensityMediumTwoToneIcon from '@mui/icons-material/DensityMediumTwoTone';
import useWindowDimensions from '../../components/GetWindow';
import UserAvatar from '../User/Avatarcard';
import Typography from '@mui/material/Typography';



export default function Dashboard() {

    const { height, width } = useWindowDimensions();

  return (
        
       <Grid container spacing={0} sx={{
        display: 'flex',
        bgColor: 'rgba(255,255,255,0.00)',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: width,
        minHeight: 'auto',
        padding: 0,
        margin: 0,
      }}>
         <Grid item xs={12} >
             {/* <DensityMediumTwoToneIcon onClick={this.toggleDrawer(anchor, true)}
          sx={{
            display: 'flex',
            alignSelf: 'flex-end',
            marginTop: 2,
            marginRight: 2,
          }}>{anchor}</DensityMediumTwoToneIcon> */}
         
         </Grid>
         <Grid item xs={12} >
         <Typography>Hello World</Typography>
         </Grid>
         <Grid item xs={12} >
         <Typography>Hello World</Typography>
         <UserAvatar/>
         </Grid>
       </Grid>
  );
}