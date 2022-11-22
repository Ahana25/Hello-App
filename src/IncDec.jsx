import React, { useState } from 'react'

function IncDec() {


let [val,setVal]= useState(0)

let IncVal=()=>
{
    return setVal(val+1);
}

let DecVal=()=>
{
    return setVal(val-1);
}
    return (
        <div>
            <h1>{val}</h1>
            <div>
                <button onClick={IncVal}>Inc</button>
                <button onClick={DecVal}>Dec</button>
            </div>
        </div>
    )
}

export default IncDec
