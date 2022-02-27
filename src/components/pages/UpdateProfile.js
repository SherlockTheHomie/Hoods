import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useTransition, animated } from 'react-spring';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


import useWindowDimensions from '../GetWindow';

// import { db } from './firebase/firebase';
// import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useAuth } from '../../utils/AuthContext';

export default function UpdateProfile() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    
    const { currentUser, updateprofile } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // const usersCollectionRef = collection(db, "users");


    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (formState.password !== formState.confirmpassword) {
        //     return setError ('Those passwords arent the same...')
        // }
        try {
            setError('')
            setLoading(true)
            await updateprofile(emailRef.current.value, passwordRef.current.value)
            navigate.push("/")
        } catch {
            setError('failed to update account')
        }
    setLoading(false)
    }


return (

    <Box component="form" onSubmit={handleSubmit}>
            <Grid container className="signup-form" direction="column" justify="center">
                <Grid item>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item>
                    <FormControl type="username" id="username" variant="standard">
                        <InputLabel htmlFor="component-simple">Need to update us, {currentUser.username}</InputLabel>
                        <Input id="component-simple" inputRef={usernameRef} />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl type="email" id="email" variant="standard">
                        <InputLabel htmlFor="component-simple">Email</InputLabel>
                        <Input id="component-simple" inputRef={emailRef} />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl type="password" id="password" variant="standard">
                        <InputLabel htmlFor="component-simple">Password</InputLabel>
                        <Input id="component-simple" inputRef={passwordRef} />
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button
                        disabled={loading}
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                    >
                        Sign Up
                    </Button>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </Grid>
            </Grid>
        </Box>
);
}