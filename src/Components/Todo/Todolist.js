export function Todolist(props) {
    return (
        <p><span className={props.className}>{props.todo} </span><button onClick={props.onClickedit}>Edit</button><button onClick={props.onClickX}>Delete</button></p>
    )
}
