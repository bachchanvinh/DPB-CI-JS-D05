import '../Css/Name.css'

export function Foodname(props) {
    return (
        <div className="Foodname">
            <div className="part1"> 
            <img src={props.linkimg} />
            <h5>Category: <span>{props.Cate}</span></h5>
            <h5>Area: <span>{props.Area}</span></h5>
            </div>
           
            <div className="part2">
                <h1>{props.foodname}</h1>
                <p>{props.detail}</p>
            </div>
        </div>
    )
}