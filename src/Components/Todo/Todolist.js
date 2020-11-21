export function Todolist (props){
    return(
            <p><span  onChange={props.edit}contentEditable="true" suppressContentEditableWarning={true} className={props.className}>{props.todo} </span><button onClick={props.onClickX}>Delete</button></p>
    )
}