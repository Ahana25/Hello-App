import React from 'react'

function Head2(props) {
    return (
        <div className="head_div">
        <h6 className="item_div">{props.val1} {props.val2} {props.val3}</h6>
            <h5 className="h5_div">The items don't match!</h5>
        </div>
    )
}

export  {Head2}
