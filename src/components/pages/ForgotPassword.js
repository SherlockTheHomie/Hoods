import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
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

export default function ForgotPassword() {

    const [formState, setFormState] = useState({email: '' });
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);


    const userRef = collection(db, "users");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(formState.email)
            setMessage("Check your Inbox")
        } catch {
            setError('failed to reset password')
        }
    setLoading(false)
    }


    const [ users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDoc(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getUsers()
  }, [])




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

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
        ...formState,
        [name]: value,
    });
};


return (
    <Grid container classname="login-form" direction="column" justify="center">
        <Paper
            variant="elevation"
            elevation={2}
            className="login-background"
        >
            <Grid item>
                <Typography component="h1" variant="h5">
                    Reset Password
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
                                name="email"
                                variant="outlined"
                                value={this.state.email}
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
                            <Button
                                disabled={loading}
                                variant="contained"
                                color="primary"
                                type="submit"
                                className="button-block"
                            >
                                Reset Password
                            </Button>
                            <Link to="/login">Login</Link>
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
