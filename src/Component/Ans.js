
export function Ans(props){
return (
    <p className={props.index}> <input type="checkbox" onClick={props.onClick}></input>{props.ans}</p>
)
}