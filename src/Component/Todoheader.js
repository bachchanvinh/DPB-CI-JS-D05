
export function Todoheader(props) {
    return (
        <div className="Todoheader">
            <h1>This is todo App</h1>
            <input type="text" placeholder="Enter todo here" onChange={props.onChange} onKeyDown={props.onKeyDown} />
        </div>
    )
}