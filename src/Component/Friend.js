
export function Friend(props) {
    return (
        <div className="Friend">
            <img src={props.avatarfriend} />
            <h5>{props.friendname}</h5>
        </div>
    )
}