import '../Asset/Css/Charity.css'

export function Charity(props) {
    return (
        <div className="Charity">
            <h2>{props.title}</h2>
            <div className="child_charity">
                <img src={props.src} />
                <div>
                    <p><strong>Name:</strong> {props.name}</p>
                    <p><strong>ID:</strong> {props.id}</p>
                    <p><strong>City:</strong> {props.city}</p>
                    <p><strong>Country:</strong> {props.country}</p>
                    <a href={props.href}>More information</a>
                </div>
            </div>
        </div>
    )
}