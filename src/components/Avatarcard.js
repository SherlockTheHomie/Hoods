import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MapsUgcTwoToneIcon from '@mui/icons-material/MapsUgcTwoTone';
import image from '../static/images/avatar1.png';
import IconButton from '@mui/material/IconButton';

export default function UserAvatar() {
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))
    const bind = useDrag(({ offset: [x, y] }) => api.start({ x, y }), {
      bounds: { left: -100, right: 100, top: -50, bottom: 50 }
    })




  return (
    <animated.div {...bind()} style={{ x, y, touchAction:'none' }}> 
    <Card sx={{ maxHeight: 155, maxWidth: 100, bgcolor:'rgba(255,255,255,0.00)'}}>
      <CardMedia
        component="img"
        image={image}
        alt="green iguana"
        sx={{ maxHeight: 155,
        maxWidth: 100,
      bgcolor:'rgba(255,255,255,0.00)'}}
      />
      </Card>
      
    </animated.div>
  );
}