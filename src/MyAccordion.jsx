import React, { useState } from 'react'

function MyAccordion(props) {

   let [show,setShow]=useState(false)
   let ShowAns=()=>
   {
       setShow(!show)
    //    if(count%2==0)
    //    {
    //        console.log(count)
    //        setShow(false)
    //    }
    //    else
    //    {
    //        console.log(count)
    //        setShow(true)
    //    }
   }

    return (

        <div>
           <div className="ques_div">
               <p className="p_tag">{props.ques}</p>
               <button onClick={ShowAns}>{show===true?'-':'+'}</button>
               {show===true?(<p>{props.ans}</p>):(<p>{}</p>)}
               
           </div> 
        </div>
    )
}

export default MyAccordion
