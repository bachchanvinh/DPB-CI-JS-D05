
export function Todolist(props) {
    return (
        <div className="aaa">
        <p><span className={props.className}>{props.todo} </span>
        <span className="buttons">
        <span className="button" onClick={props.onClickedit}>🖊️</span>
        <span className="button" onClick={props.onClickX}>🗑️</span></span></p>
        </div>
    )
}
