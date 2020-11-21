import React from 'react'
import '../../Asset/Css/Login.css'
export function Login(props){
        return (
            <div className="login">
                <h1>Login</h1>
                <p>Username</p>
                <input type="text" placeholder="Your user name?" />
                <p>Pass</p>
                <input type="password" placeholder="Pass??" />
                <p className="Error">{props.tellerror}</p>
                <div>
                    <input type="button" value="Sign in" onClick={props.Clickin}/>
                </div>
            </div>
        )
    }
