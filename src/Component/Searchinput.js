import React from 'react'

function Searchinput(props) {
    return (
        <div>
            <input type="text" placeholder="What's emoji" onChange={props.aFunction}  />
        </div>)
}



export default Searchinput