
export function Todoedit (props){
    return(
        <div className="Edit">
        <textarea value={props.value} onChange={props.onChange} onKeyDown={props.onKeyDown}></textarea>
        </div>
    )
}