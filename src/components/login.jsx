import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './login-button';
import SignupButton from './signup-button';

const Login = () => {
    const {loginWithRedirect, logout, user, isLoading} = useAuth0();
    return (
        <>
            <div className='login-div'>
                <div className='login-buttons-div'>
                <h1 className='login-title'>Dress//Swap</h1>
                {!isLoading && !user && (
                    <LoginButton/>
                )}
                {!isLoading && !user && (
                    <SignupButton/>
                )}
                    
                </div>
            </div>
        </>
  )
}

export default Login


// {!isLoading && user &7 (
//     <button className='login-buttons' onClick={() => logout()}>Log Out</button>
// )}