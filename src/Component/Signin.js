import React from 'react'
import '../Asset/CSS/Signin.css'

export function Signin(props) {
    return (
        <div className="Signin">
            <h1>Sign in</h1>
            <div className="form-controls">
               
                <div className="form-control">
                    <label htmlFor="email">Email adress:</label>
                    <input type="text" placeholder="email@mail.com" onChange={props.onChangeemail} />
                </div>
                <div className="form-control">
                    <label htmlFor="Password">Password:</label>
                    <input type="text" placeholder="Enter password" onChange={props.onChangepassword} />
                </div>
            </div>
            <button className="Signinbtn" onClick={props.onClicksignin}>Sign in</button>
        </div>
    )
} 