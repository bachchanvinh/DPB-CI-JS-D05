
export function Header(props) {
    return (
        <div className="Header">
            <h1>This is todo App</h1>
            <input type="text" placeholder="Enter todo here" onChange={props.onChange} />
            <button onClick={props.onClick}>Submit</button>
        </div>
    )
}