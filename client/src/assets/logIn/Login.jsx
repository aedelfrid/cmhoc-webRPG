import { useState } from 'react'

function Login() {
    const [formState, setFormState] = useState({ email: '', password: '' })

    const loginFormHandler = async (event) => {
        // Stop the browser from submitting the form so we can do so with JavaScript
        event.preventDefault();

        if (email && password) {
            // Send the e-mail and password to the server
            const response = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to log in');
            }
        }
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