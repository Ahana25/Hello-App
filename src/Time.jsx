import React, { useState } from 'react'

function Time() {

let time = new Date().toLocaleTimeString();

let [val,setVal]= useState(time)

setInterval(() => {
    let time = new Date().toLocaleTimeString();
    setVal(time)
}, 1000);

    return (
        <div>
            <h1>{val}</h1>
        </div>
    )
}

export default Time
