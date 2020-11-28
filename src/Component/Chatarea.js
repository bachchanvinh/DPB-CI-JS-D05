import '../Asset/Css/Chatarea.css'
import { Chat } from './Chat'
export function Chatarea(props) {
    return (
        <div className="Chatarea">
            <div className="Headerchat">
                <img src={props.avatarchat} />
            <h2>{props.userchatname}</h2>
            </div>
            <div className="Chat">
                <Chat conver={props.conver} />
                <Chat conver={props.conver} />
                <Chat conver={props.conver} />
                <Chat conver={props.conver} />
                <Chat conver={props.conver} />
                <Chat conver={props.conver} />
                <Chat conver={props.conver} />
                <Chat conver={props.conver} />
                <Chat conver={props.conver} />
                <Chat conver={props.conver} />

            </div>
            <div className="input">
                <input type ="text"/>
                <button> Send</button>
            </div>
        </div>
    )
}