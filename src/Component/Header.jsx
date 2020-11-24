import '../Css/Header.css'
export function Header (props){
    return(
        <div className="Header">
            <h1>Simple weather app</h1>
            <div>
            <input type="text" placeholder="Search for a city"/>
            <button onClick={props.onClick}>SUBMIT</button>
            </div>
        </div>
    )
}