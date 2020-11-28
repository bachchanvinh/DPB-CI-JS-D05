import { Headerfrlst } from './Headerfrlst'
import { Friend } from './Friend'
import '../Asset/Css/Friendlist.css'

export function Friendlist(props) {
    return (
        <div className="Friendlist">
            <Headerfrlst avatar={props.avatar} username={props.username} />
            <div className="List">
                <h3>Friend list:</h3>
                <Friend avatarfriend={props.avatarfriend} friendname={props.friendname} />
                <Friend avatarfriend={props.avatarfriend} friendname={props.friendname} />
                <Friend avatarfriend={props.avatarfriend} friendname={props.friendname} />
                <Friend avatarfriend={props.avatarfriend} friendname={props.friendname} />
                <Friend avatarfriend={props.avatarfriend} friendname={props.friendname} />
            </div>
        </div>
    )
}