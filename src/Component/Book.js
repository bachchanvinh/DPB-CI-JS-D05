import '../Asset/CSS/Book.css'
export function Book (props){
    return (
        <div className="Book">
            <h5>{props.title}</h5>
            <img src= {props.img}/>
            <div>
            <p>Authors: {props.authors}</p>
            <p>Description: {props.description}</p>
            </div>
           
        </div>
    )
}