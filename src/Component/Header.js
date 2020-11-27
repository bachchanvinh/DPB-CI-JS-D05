import '../Asset/Css/Header.css'

export function Header (props) {
    return(
        <div className ="Header">
            <h1>Charity Finder</h1>
            <div>
            <input type="text" placeholder="Which event?" onChange={props.onChange}/>
            <button onClick={props.onClick}>Submit</button>   
            </div>
        </div>
    )
}