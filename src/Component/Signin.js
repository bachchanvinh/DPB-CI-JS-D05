import React from 'react'

export function Signin(props) {
    return (
        <div className="Signin">
            <h1>Sign in</h1>
            <div className="form-controls">
                <div className="form-control">
                    <label for="email">Email adress</label>
                    <input type="text" placeholde="email@mail.com" onChange={props.onChangeemail} />
                </div>
                <div className="form-control">
                    <label for="Password">Passowrd</label>
                    <input type="text" placeholder="Enter password" onChange={props.onChangepassword} />
                </div>
            </div>
            <button className="Signinbtn" onClick={props.onClicksignin}>Sign in</button>
        </div>
    )
} 