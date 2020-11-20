import React from 'react'


export class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <p>Username</p>
                <input type="text" placeholder="Your user name?" />
                <p>Pass</p>
                <input type="text" placeholder="Pass??" />
                <p className="Error">{this.props.tellerror}</p>
                <div>
                    <input type="button" value="Sign in" onClick={this.props.Clickin}/>
                </div>
            </div>
        )
    }
}