
export function Signup(props){
        return (
            <div className="Signup">
                <h1>Sign up</h1>
                <p>Username</p>
                <input type="text" placeholder="Your user name?" />
                <p>Pass</p>
                <input type="text" placeholder="Pass??" />
                <p className="Error">{props.tellerror}</p>
                <div>
                    <input type="button" value="Sign up" onClick={props.Clickin}/>
                </div>
            </div>
        )
    }
