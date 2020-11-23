export function Edit (props){
    return (
        <textarea autoFocus="true" className="Edit" type ="text" onChange={props.onChange} value={props.value} onKeyDown={props.Enter} style={{display:`${props.display}`}}ref={props.autoFocus}></textarea>
      
    )
}