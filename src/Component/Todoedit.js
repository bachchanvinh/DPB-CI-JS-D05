
export function Todoedit (props){
    return(
        <div className="Edit">
        <textarea onFocus={props.onFocus} autoFocus={props.autoFocus}  value={props.value} onChange={props.onChange} onKeyDown={props.onKeyDown}></textarea>
        </div>
    )
}