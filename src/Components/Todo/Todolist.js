
export function Todolist(props) {
    return (
        <div className="aaa">
        <p><span className={props.className}>{props.todo} </span>
        <span className="buttons">
        <button className="button" onClick={props.onClickedit}>🖊️</button>
        <button className="button" onClick={props.onClickX}>🗑️</button></span></p>
        </div>
    )
}
