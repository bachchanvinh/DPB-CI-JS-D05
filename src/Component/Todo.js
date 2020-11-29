
export function Todo(props) {
    
    return (
        <div className="Todo">
           <input type="checkbox"/>
           <span>{props.Todo}</span>
           <button onClick={props.clickEdit}>Edit</button>
           <button onClick={props.clickDelete}>Delete</button> 
        </div>
    )
}