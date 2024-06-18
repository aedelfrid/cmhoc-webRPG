import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

function Login() {
    const [formState, setFormState] = useState({ email: '', password: '' })
    const [login, { error, loginData }] = useMutation(LOGIN_USER);

    const loginFormHandler = async (event) => {
        // Stop the browser from submitting the form so we can do so with JavaScript
        event.preventDefault();

        if (email && password) {
            // Send the e-mail and password to the server
            try {
                const { email, password } = formState;
                const { data } = await login({
                    variables: { email, password },
                });
                console.log(data);
                const token = data.login.token;
                console.log(token);

                if (!token) {
                    return alert('Something went wrong with the login.');
                }

                Auth.login(token);
                document.location.replace('/');
            } catch (e) {
                console.log(e);
            }
        }

        return alert('Missing email or password.');
    };

    return (
        <>
         <form>
                <label>username</label>
                <input
                    value={email}
                    placeholder="Enter your email here"
                    onChange={(ev) => setEmail(ev.target.value)}
                ></input>

                <label>password</label>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                ></input>
         </form>
        </>
    )
}