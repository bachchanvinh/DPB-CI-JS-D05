import '../Css/Weatherlist.css'
export function Weatherlist(props) {
    return (
        <div className="Weatherlist">
            <h3>{props.cityname}</h3>
            <h1>{props.cel}<sup>°C</sup></h1>
            <img src={props.icon} />
            <p>{props.description}</p>
        </div>
    )
}