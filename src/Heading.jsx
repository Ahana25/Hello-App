// import React from 'react'


// let h1=
// {
//     color:'blue',
//     textAlign:'center'
// }
// function Heading() {
//     return (
//         <div>
//               <h1 style={h1}>Hello Ahana here</h1>
//         </div>
//     )
// }

// export default Heading



// import React from 'react'

// function Heading() {
//     let date= new Date();
//     let val=date.getHours();
// if((date.getHours()>=1)&&(date.getHours()<=11))
// {
//     val="Good Morning!"
// }
// if((date.getHours()>=2)&&(date.getHours()<=7))
// {
//     val="Good Afternoon"
// }
    
//     return (
//         <div>
//             <h1>{val}</h1>
//         </div>
//     )
// }

// export default Heading


// let getName=()=>
// {
//   let fname="Ahana";
//   let lname="Bandyopadhyay";
//   return(
//       <>
//   <li>Hello Army!!!</li>
//   <li>{fname}</li>
//   <li>{lname}</li>
//   </>
//   ) 
// }

// export default Heading;
// export {getName};




// import React from 'react';


// let add=(val1,val2)=>
// {
//   let sum=val1+val2;
//   return(sum)
// }

// let sub=(val1,val2)=>
// {
//   let sub=val1-val2;
//   return(sub)
// }

// let div=(val1,val2)=>
// {
//     let div=val1/val2;
//     return(div.toFixed(2))                     //the toFixed method defines the number of digits after the decimal
// }

// let mul=(val1,val2)=>
// {
//    let mult=val1*val2;
//    return(mult)
// }

// export {add,sub,div,mul}

import React from 'react'

function Heading(props) {
    return (
        <div>
            <h4 className="h4_tag">{props.title}</h4>
        </div>
    )
}

export default Heading

