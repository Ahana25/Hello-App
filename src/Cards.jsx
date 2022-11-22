import React from 'react'

function Cards(props) {
    return (
        <div>
           <ul>
               <li>{props.confirmed}</li>
               <li>{props.tested}</li>
           </ul> 
        </div>
    )
}

export default Cards

