import React from 'react'
import {Head1} from './Head1';
import {Head2} from './Head2';

function Slot(props) {
    return (
        <div className="emo_div">
           {(props.val1===props.val2)&&(props.val2===props.val3)?(<Head1 val1={props.val1} val2={props.val2} val3={props.val3}/>):(<Head2 val1={props.val1} val2={props.val2} val3={props.val3}/>)}
           <hr/>
        </div>
    )
}

export default Slot
