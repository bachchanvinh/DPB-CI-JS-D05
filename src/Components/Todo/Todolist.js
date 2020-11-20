export function Todolist (props){
    return(
            <p><span  contentEditable="true" suppressContentEditableWarning={true} className={props.className}>{props.todo} </span><button onClick={props.onClickX}>X</button></p>
    )
}