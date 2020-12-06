import React from 'react'

export function Signup(props) {
    return (
        <div className="Signup">
            <h1>Sign up</h1>
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
            <button className="Signupbtn" onClick={props.onClickSignup}>Sign up</button>
        </div>
    )
} 