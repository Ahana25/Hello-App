import React from 'react';
import './index.css'
let list=
{
    color:'red',
    listStyleType:'none',
    textAlign:'center',
    margin:'100px',
    padding:'30px'

}
function List() {
    return (
        <div>
            <ol style={list}>
    <li>FRIENDS</li>
    <li>Dark</li>
    <li>13 Reasons Why</li>
    <li>Stranger Things</li>
    <li>Big Bang Theory</li>
  </ol>
        </div>
    )
}

export default List
