export function Header (props) {
    return (
        <div>
            <h1>Book Finder</h1>
            <input type="text" placeholder="Enter book name" onInput={props.onInput}/>
            <input type="button" value="Submit" onClick={props.onClick}/>
        </div>
    )
}