import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

function Poke() {
    let [val,setval]=useState();
    let[names,setNames]=useState('');
    let UpdateVal=(event)=>
    {
        setval(event.target.value)
    }
    useEffect(()=>
    {
        
  function getData()
  {
        axios.get(`https://pokeapi.co/api/v2/pokemon?${val}`)
       
          .then((ValObj)=>
          {
              
              setNames(ValObj.data.results.name)
          }) 
  
        }
        getData();
    })


    return (
        <div>

        <h2>You chose <span>{val}</span></h2>
        <h2>The name of the pokemon is <span>{names}</span></h2>
        <h2>Total moves that you have is <span>{}</span></h2>
            <select name="input" id="pokemon" value={val} onChange={UpdateVal}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>
        </div>
    )
}


export default Poke
