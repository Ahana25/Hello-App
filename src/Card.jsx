// import React, { useState } from 'react';
// import Heading from './Heading';
// import './index.css';
// function Card(props) {

//     let[show,setShow]=useState(false);

//     let ShowDeets=()=>
//     {
//         setShow(!show)
//     }

//     return (
//         <div className="main_div">
//         <div className="card_div">
//             <img className="img_div" src={props.img_src} alt={props.alt_title} />
//             <Heading title={props.title}/>
//             <div className="title_div">{props.web_name}</div>
//             <br />
//             <a href={props.link} target="_blank">
//                 <button className="btn">Watch Now</button>
//             </a>
//             <br />
//             <div className="details_div">
//                 <button onClick={ShowDeets}>{show===true?'-':'+'}</button>
//                 {show===true?<p>{props.details}</p>:<p>{}</p>}
//             </div>
//         </div> 
//         </div>
//     )
// }

// export default Card
