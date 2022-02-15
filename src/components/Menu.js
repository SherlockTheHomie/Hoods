import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import BrushTwoToneIcon from '@mui/icons-material/BrushTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import DensityMediumTwoToneIcon from '@mui/icons-material/DensityMediumTwoTone';
import HiveTwoToneIcon from '@mui/icons-material/HiveTwoTone';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';





export default function Menu() {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200,}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ padding: 0,}}>
        <ListItem button sx={{
          fontSize: 'medium',
        }} >
            <ListItemIcon sx={{ color: '#acff00', }}>
              <HiveTwoToneIcon/>
            </ListItemIcon>
            <ListItemText>myHood</ListItemText>
          </ListItem>
      </List>
      <Divider/>
      <List sx={{
        padding: 0,
      }}>
        <ListItem button elevation={20} sx={{ fontSize: 'small',}} >
            <ListItemIcon sx={{ color: '#acff00', }}>
              <AccountCircleTwoToneIcon/>
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItem>
        <ListItem button elevation={20} sx={{ fontSize: 'small',}} >
            <ListItemIcon sx={{ color: '#acff00',}}>
              <EmojiEmotionsTwoToneIcon />
            </ListItemIcon>
            <ListItemText sx={{
              color: 'rgba(255,255,255,1.0)',
            }} >Avatar</ListItemText>
          </ListItem>
          <ListItem button elevation={20} sx={{ fontSize: 'small',}} >
            <ListItemIcon sx={{ color: '#acff00',}}>
              <BrushTwoToneIcon />
            </ListItemIcon>
            <ListItemText sx={{
              color: 'rgba(255,255,255,1.0)',
            }} >Style</ListItemText>
          </ListItem>
          <ListItem button elevation={20} sx={{ fontSize: 'small',}} >
            <ListItemIcon sx={{ color: '#acff00',}}>
              <GroupsTwoToneIcon />
            </ListItemIcon>
            <ListItemText sx={{
              color: 'rgba(255,255,255,1.0)',
            }} >My Rooms</ListItemText>
          </ListItem>
      </List>

    </Box>
  );

  return (
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
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}