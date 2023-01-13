import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Register = () => {
    const {loginWithRedirect, logout, user, isLoading} = useAuth0();
    return (
        <>
            <div class="register-form">
                <form action="/register" method="POST">
                    <input type="text" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input class="add-new-form-btn" type="submit" value="Register"/>
                </form>
            </div>
        </>
  )
}

export default Register