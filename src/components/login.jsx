import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './login-button';

const Login = () => {
    const {user, isLoading} = useAuth0();

    return (
        <>
            <div className='login-div'>
                <div className='login-buttons-div'>
                <h1 className='login-title'>Dress//Swap</h1>
                {!isLoading && !user && (<LoginButton/>)}
                </div>
            </div>
        </>
  )
}

export default Login

 {/* <button className='login-buttons' onClick={() => logout()}>Log Out</button> */}