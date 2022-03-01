import React, { useState, Component } from 'react';
import { styled } from '@mui/material/styles';
import { useTransition, animated } from 'react-spring';

import Dashboard from './Dashboard';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import BrushTwoToneIcon from '@mui/icons-material/BrushTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import DensityMediumTwoToneIcon from '@mui/icons-material/DensityMediumTwoTone';
import CheckroomTwoToneIcon from '@mui/icons-material/CheckroomTwoTone';
import HiveTwoToneIcon from '@mui/icons-material/HiveTwoTone';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useWindowDimensions from '../../components/GetWindow';
import UserAvatar from '../User/Avatarcard';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';


import { auth } from '../../firebase';



export default function Home() {

  const { height, width } = useWindowDimensions();

  const [drawerState, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [error, setError] = useState('');

  let navigate = useNavigate();
  
  const handleLogout = async () => { 
      setError('')
      try {
        await signOut(auth)
        navigate('/login')
      } catch (error) {
        console.log(error)
        setError('failed to logout')
      }
    }


  


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...drawerState, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200, }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ padding: 0, }}>
        <ListItem button sx={{
          fontSize: 'medium',
        }} >
          <ListItemIcon sx={{ color: '#acff00', }}>
            <HiveTwoToneIcon />
          </ListItemIcon>
          <ListItemText>myHood</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List sx={{
        padding: 0,
      }}>
        <ListItem button elevation={20} sx={{ fontSize: 'small', }} >
          <ListItemIcon sx={{ color: '#acff00', }}>
            <AccountCircleTwoToneIcon />
          </ListItemIcon>
          <ListItemText>username</ListItemText>
        </ListItem>
        <ListItem button elevation={20} sx={{ fontSize: 'small', }} >
          <ListItemIcon sx={{ color: '#acff00', }}>
            <EmojiEmotionsTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={{
            color: 'rgba(255,255,255,1.0)',
          }} >Avatar</ListItemText>
        </ListItem>
        <ListItem button elevation={20} sx={{ fontSize: 'small', }} >
          <ListItemIcon sx={{ color: '#acff00', }}>
            <BrushTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={{
            color: 'rgba(255,255,255,1.0)',
          }} >Style</ListItemText>
        </ListItem>
        <ListItem button elevation={20} sx={{ fontSize: 'small', }} >
          <ListItemIcon sx={{ color: '#acff00', }}>
            <GroupsTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={{
            color: 'rgba(255,255,255,1.0)',
          }} >My Rooms</ListItemText>
        </ListItem>
        <Divider/>
        <ListItem button elevation={20} sx={{ fontSize: 'small', }} >
          <ListItemIcon sx={{ color: '#acff00', }}>
            <GroupsTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={{
            color: 'rgba(255,255,255,1.0)',
          }} >Update Profile</ListItemText>
        </ListItem>
        <ListItem button onClick={handleLogout} elevation={20} sx={{ fontSize: 'small', }} >
          <ListItemIcon sx={{ color: '#acff00', }}>
            <GroupsTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={{
            color: 'rgba(255,255,255,1.0)',
          }} >Log Out</ListItemText>
        </ListItem>
      </List>

    </Box>
  );


  return (
    <>
    <div>
    {['right'].map((anchor) => (
      <React.Fragment key={anchor}>
        <DensityMediumTwoToneIcon onClick={toggleDrawer(anchor, true)}
          sx={{
            float: 'right',
            marginTop: 2,
            marginRight: 2,
          }}>{anchor}</DensityMediumTwoToneIcon>
        <Drawer
          anchor={anchor}
          open={drawerState[anchor]}
          onClose={toggleDrawer(anchor, false)}
          sx={{ paddingRight: 0}}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    ))}
  </div>
       <Dashboard/>
       </>
  );
}