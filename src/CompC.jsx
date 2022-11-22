import React from 'react';
import {ImgVal} from './CompA'

function CompC() {
    return (
        <div>
            <h4>Wondering how you can be their friends too?</h4>
            <p>Well, here's presenting FRIENDS!!!!</p>
            <div>
                <ImgVal.Consumer>{(img)=>
                {
                   return(
                           <img src={img} alt="FRIENDS!!" />
                       )
                }}</ImgVal.Consumer>
            </div>
        </div>
    )
}

export default CompC
