import React from 'react'
function Emojilist(props) {
    return (
        <div>
            <p><span>{props.symbol}</span>  {props.title}</p>
        </div>
    )

}
export default Emojilist
