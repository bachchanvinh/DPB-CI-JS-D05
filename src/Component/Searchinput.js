import React from 'react'
import '../CSS/Input.css'
function Searchinput(props) {
    return (
        <div className="Search">
            <input type="text" placeholder="What's emoji" onChange={props.aFunction}  />
        </div>)
}



export default Searchinput