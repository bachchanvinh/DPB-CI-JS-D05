import '../Css/Header.css'

export function Header(props) {
    return (
        <div className="Header">
                <h1>Feeling hungry?</h1>
                <h2>Get a random meal by clicking below</h2>
                <button onClick={props.onClick}>Get meal 🍔</button>
        </div>
    )
}