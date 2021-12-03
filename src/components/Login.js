import React from 'react';
import './Login.css'
import gmail from '../Assets/gmail.png'
import { Button } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

import { initializeApp } from 'firebase/app';
 import {getAuth, onAuthStateChanged} from 'firebase/auth'



const Login = () => {

    const dispatch = useDispatch()

    // const signIn = () => {
    //     auth
    //       .signInWithPopup(provider)
    //       .then(({ user }) => {
    //         dispatch(
    //           login({
    //             displayName: user.displayName,
    //             email: user.email,
    //             photoUrl: user.photoURL,
    //           })
    //         );
    //       })
    //       .catch((error) => alert(error.message));
    //   };



    return (
        <div className="login">
            <div className="login__container">
            <img src={gmail} alt='pic'/>
            </div>
            <Button variant='container' color='primary' onClick={signIn}>Login</Button>

        </div>
    );
}

export default Login;
