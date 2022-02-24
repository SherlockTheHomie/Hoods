import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Link, useHistory } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Grid';
import useWindowDimensions from '../GetWindow';
import UserAvatar from '../Avatarcard';
import Typography from '@mui/material/Typography';

import { db } from './firebase/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useAuth } from '../../utils/AuthContext';

export default function SignupSplash() {

    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const usersCollectionRef = collection(db, "users");


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formState.password !== formState.confirmpassword) {
            return setError ('Those passwords arent the same...')
        }
        try {
            setError('')
            setLoading(true)
            await signup(formState.username, formState.email, formState.password)
            history.push("/")
        } catch {
            setError('failed to create account')
        }
    setLoading(false)
    }





//         await addDoc(userCollectionRef, {
//             name: formState.username,
//             email: formState.email,
//             password: formState.password,
//         });
//         const token = mutationResponse.data.addUser.token;
//         Auth.login(token);

//     } catch (error) {
//         console.log(error);
//     }
// };

// const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//         ...formState,
//         [name]: value,
//     });
// };


return (
    <Grid container classname="login-form" direction="column" justify="center">
        <Paper
            variant="elevation"
            elevation={2}
            className="login-background"
        >
            <Grid item>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
            </Grid>
            <Grid item>
                <form onSubmit={this.handleSubmit}>
                    {error && <Alert>{error}</Alert> }
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <TextField
                                type="email"
                                placeholder="Email"
                                fullWidth
                                name="username"
                                variant="outlined"
                                value={this.state.username}
                                onChange={(event) =>
                                    this.setState({
                                        [event.target.name]: event.target.value,
                                    })
                                }
                                required
                                autoFocus
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                type="password"
                                placeholder="Password"
                                fullWidth
                                name="password"
                                variant="outlined"
                                value={this.state.password}
                                onChange={(event) =>
                                    this.setState({
                                        [event.target.name]: event.target.value,
                                    })
                                }
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                type="password"
                                placeholder="Confirm Password"
                                fullWidth
                                name="confirmpassword"
                                variant="outlined"
                                value={this.state.confirmpassword}
                                onChange={(event) =>
                                    this.setState({
                                        [event.target.name]: event.target.value,
                                    })
                                }
                                required
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                disabled={loading}
                                variant="contained"
                                color="primary"
                                type="submit"
                                className="button-block"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
            <Grid item>
                <Link href="#" variant="body2">
                    Forgot Password?
                </Link>
            </Grid>
        </Paper>
    </Grid>



);
}

