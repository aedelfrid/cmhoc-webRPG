import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

function Signup() {
    
    
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