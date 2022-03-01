import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useTransition, animated } from 'react-spring';
import './mainnav.css';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import useWindowDimensions from '../../components/GetWindow';
import Typography from '@mui/material/Typography';

// import { db } from './firebase/firebase';
// import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useAuth } from '../../utils/AuthContext';
import UserAvatar from '../User/Avatarcard';

export default function ForgotPassword() {

    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const { height, width } = useWindowDimensions();
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your Inbox")
        } catch {
            setError('failed to reset password')
        }
        setLoading(false)
    }
    
    
    // const userRef = collection(db, "users");
    // const [users, setUsers] = useState([]);
    // const usersCollectionRef = collection(db, "users");

    // useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await getDoc(usersCollectionRef);
    //         setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     }

    //     getUsers()
    // }, [])






    return (

        <Box component="form" onSubmit={handleSubmit} height={height} width='inherit'>
            <Grid container className="password-reset-form" direction="column" alignItems="center" justify="center">
                <Grid item xs={12} marginTop={2}>
                    <Typography component="h1" variant="h5" >
                        Password Reset
                    </Typography>
                    {message && <Alert severity="success">{message}</Alert>}
                    {error && <Alert severity="error">{error}</Alert> }
                </Grid>
                <Grid item xs={12} padding={1}>
                    <FormControl type="email" id="email" variant="standard">
                        <InputLabel htmlFor="component-outlined"></InputLabel>
                        <OutlinedInput id="component-outlined" placeholder="Old account, who dis?" inputRef={emailRef} sx={{ bgcolor: 'rgba(255,255,255,0.25)'}} />
                        <FormHelperText id="my-helper-text" >Email</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} padding={1}>
                    <Button
                        disabled={loading}
                        variant="outlined"
                        color="primary"
                        type="submit"
                        className="button-block"
                    >
                        Reset Password
                    </Button>
                    <Button variant="outlined" href="/login" sx={{ color:'#acff00' }}>Login</Button>
                </Grid>
            </Grid>
        </Box>
    );
}
