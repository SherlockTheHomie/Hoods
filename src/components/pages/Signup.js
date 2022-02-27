import React, { useState, useRef } from 'react';
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
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { db } from '../../firebase';
import { auth } from '../../firebase';

export default function SignupSplash() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passConfirmRef = useRef();

    const auth = getAuth()
    let navigate = useNavigate();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { height, width } = useWindowDimensions();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = usernameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const passwordConfirm = passConfirmRef.current.value
        const userAvatar = {}
        const rooms = []

        

        if (password !== passwordConfirm) {
            return setError('Those passwords arent the same...')
        }
        try {
            setError('')
            setLoading(true)
            console.log("FRANKLIN NOOOOOOOOOOOOOOOOOOOOOOOOO")
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            
            const user = userCredential.user

            updateProfile(auth.currentUser, {
                displayName: username,
            })
            
            const formData = { username, email, password, userAvatar, rooms }

            delete formData.password
            formData.timestamp = serverTimestamp()

            await setDoc(doc(db, 'Users', user.uid), formData)
            //     .then((userCredential) => {
            //         await setDoc(doc(usersCollectionRef, user.uid), {
            //             username: `${username}`, email: `${email}`
            //             avatarId: "", rooms: "" 
            //         }
            //         // addDoc(usersCollectionRef, {userCredentials});
            //         console.log("AFTER ADD DOC")
            // })
            navigate("/")
        } catch (error) {
            console.log(error)
            setError('failed to create account')
        }
        setLoading(false)
    }





    //         await addDoc(userCollectionRef, {
    //             name: formState.username,
    //             email: formState.email,
    //             password: formState.password,

    return (
        <Box component="form" height={height} width='inherit'>
            <Grid container className="signup-form" direction="column" alignItems="center" justify="center">
                <Grid item xs={12} marginTop={2}>
                    <Typography component="h1" variant="h5" >
                        Sign Up
                    </Typography>
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={12} padding={1}>
                    <FormControl type="username" id="username" variant="standard">
                        <InputLabel htmlFor="component-outlined"></InputLabel>
                        <OutlinedInput id="component-outlined" placeholder="islandboi4eva" inputRef={usernameRef} sx={{ bgcolor: 'rgba(255,255,255,0.25)' }} />
                        <FormHelperText id="my-helper-text" >Username</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} padding={1}>
                    <FormControl type="email" id="email" variant="standard">
                        <InputLabel htmlFor="component-outlined"></InputLabel>
                        <OutlinedInput id="component-outlined" placeholder="kingof@jellies.com" inputRef={emailRef} sx={{ bgcolor: 'rgba(255,255,255,0.25)' }} />
                        <FormHelperText id="my-helper-text" >Email</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} padding={1}>
                    <FormControl type="password" id="password" variant="standard">
                        <InputLabel htmlFor="component-outlined"></InputLabel>
                        <OutlinedInput id="component-outlined" placeholder="anything...sneaky" inputRef={passwordRef} sx={{ bgcolor: 'rgba(255,255,255,0.25)' }} />
                        <FormHelperText id="my-helper-text" >Password</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} padding={1}>
                    <FormControl type="password" id="passwordconfirm" variant="standard">
                        <InputLabel htmlFor="component-outlined"></InputLabel>
                        <OutlinedInput id="component-outlined" placeholder="One more time!" inputRef={passConfirmRef} sx={{ bgcolor: 'rgba(255,255,255,0.25)' }} />
                        <FormHelperText id="my-helper-text" >Confirm Password</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} padding={1}>
                    <Button
                        disabled={loading}
                        variant="outlined"
                        color="primary"
                        type="submit"
                        className="button-block"
                        onClick={handleSubmit}
                    >
                        Lets do this!
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

