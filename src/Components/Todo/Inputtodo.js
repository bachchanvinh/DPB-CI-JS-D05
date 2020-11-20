export function Inputtodo (props) {
    return (
        <div className="input">
            <input type="text" placeholder="What do you want to do?" onKeyDown={props.Enter} onChange={props.Change}/>
        </div>
    )
}