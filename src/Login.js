import React from 'react'
import './Login.css'
import Button  from '@mui/material/Button'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
           dispatch({
            type: actionTypes.SET_USER,
            user: result.user.delete,
           }) 
        }).catch((error) => alert(error.message));
    }
  return (
    <div className='login'>
        <div className='login__logo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="facebook logo icon" />
            <img className="login__logo-text" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Facebook_Logo_%282015%29_light.svg" alt="facebook logo text"/>
        </div>
        <Button type="submit" onClick={signIn}>
            Sign In
        </Button>
    </div>
  )
}

export default Login