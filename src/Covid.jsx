import React, { useEffect } from 'react'
import { useState } from 'react';
import Cards from './Cards'

function Covid() {
let[val,setval]=useState([]);
 let getData=()=>
 {
     fetch('https://data.covid19india.org/v4/min/data.min.json')

    .then((Obj)=>
    {
        return Obj.json();
    }).then((valObj)=>
    {
        console.log(valObj.AN.delta)
       setval(valObj.AN.delta);
    }).catch((error)=>
    {
        console.log(`Error in connecting ${error}`)
    })

 }

  useEffect(()=>
  {
    getData();
  },[])

    return (
        <div>
            <Cards confirmed={val.confirmed} tested={val.tested}/>
        </div>
    )
}

export default Covid
