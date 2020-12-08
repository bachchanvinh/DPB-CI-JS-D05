import React from 'react'
import '../Asset/CSS/Signup.css'

export function Signup(props) {
    return (
        <div className="Signup">
            <h1>Sign up</h1>
            <div className="form-controls">
                <div className="form-control">
                    <label htmlFor="email">Username:</label>
                    <input type="text" placeholder="Your name here" onChange={props.onChangeuname} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email adress</label>
                    <input type="text" placeholder="email@mail.com" onChange={props.onChangeemail} />
                </div>
                <div className="form-control">
                    <label htmlFor="Password">Passowrd</label>
                    <input type="text" placeholder="Enter password" onChange={props.onChangepassword} />
                </div>
            </div>
            <button className="Signupbtn" onClick={props.onClickSignup}>Sign up</button>
        </div>
    )
} 