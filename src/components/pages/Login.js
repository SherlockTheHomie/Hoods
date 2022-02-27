import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

import { useTransition, animated } from 'react-spring';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import useWindowDimensions from '../GetWindow';

// import { db } from './firebase/firebase';
// import { collection, getDocs, addDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginSplash() {
    // Form Refs
    const emailRef = useRef();
    const passwordRef = useRef();
    // Use State homies
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    // Window Dimension getter boi
    const { height, width } = useWindowDimensions();

    
    // const userRef = collection(db, "users");
    // Auth variable declare
    const auth = getAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value
        const password = passwordRef.current.value

        try {
            setError('')
            setLoading(true)
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    navigate("/")
                })
        } catch {
            setError('failed to login')
        }
        setLoading(false)
    }


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
            <Grid container className="login-form" direction="column" alignItems="center" justifyItems="center">

                <Grid item xs={12} marginTop={2}>
                    <Typography component="h1" variant="h5" >
                        Login
                    </Typography>
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={12} padding={1}>
                    <FormControl type="email" id="email" >
                        <InputLabel htmlFor="component-outlined" ></InputLabel>
                        <OutlinedInput id="component-outlined" placeholder="facehead@example.com" inputRef={emailRef} sx={{ bgcolor: 'rgba(255,255,255,0.25)' }} />
                        <FormHelperText id="my-helper-text" >Email</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} padding={1}>
                    <FormControl type="password" id="password" >
                        <InputLabel htmlFor="component-outlined" ></InputLabel>
                        <OutlinedInput id="component-outlined" placeholder="Shhhh..." inputRef={passwordRef} sx={{ bgcolor: 'rgba(255,255,255,0.25)' }} />
                        <FormHelperText id="my-helper-text">Password</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} padding={1}>
                    <Button
                        disabled={loading}
                        variant="outlined"
                        type="submit"
                        className="button-block"
                        sx={{ color: '#acff00', margin: 1, }}
                    >
                        Login
                    </Button>
                    <Button variant="outlined" href="/forgot-password" sx={{ color: '#acff00' }}>Forgot Password?</Button>
                    {/* <Link to="/forgot-password">Forgot Password?</Link> */}
                </Grid>
                <Grid item xs={12} padding={1}>
                    <Button variant="outlined" href="/signup" sx={{ color: '#acff00' }}>Create Account</Button>
                </Grid>
            </Grid>
        </Box>
    );
}


