export function Todolist (props){
    return(
            <p className={props.className}>{props.todo} <button onClick={props.onClickX}>X</button></p>
    )
}