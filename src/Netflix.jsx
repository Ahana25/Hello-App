// import React from 'react';
// import {list} from './ArrayList1';
// import Card from './Card'

// function Netflix() {
//     return (
//         <div>
//         {list.map((val)=>
//         {
//    return <Card key ={val.id} img_src={val.img_src} alt_title={val.alt_title} title={val.title} web_name={val.web_name} link={val.link}/>

//         })}
//         </div>
//     )
// }

// export default Netflix



// import React from 'react';
// import {list} from './ArrayList1';
// import Card from './Card';
// import './index.css'

// function Netflix() {

//     return (
//         <div>
//             {
//                 list.map((val)=>
//                 {
//                    return <Card img_src={val.img_src} alt={val.alt} title={val.title} web_name={val.web_name} link={val.link}/>
//                 })
//             }
//         </div>
//     )
// }

// export default Netflix


// import React from 'react';
// import {list} from './ArrayList1';
// import Card from './Card'

// function Netflix() {
//     return (
//         <div>
//             {list.map((val)=>
//             {
//                 return <Card img_src={val.img_src} alt={val.alt} title={val.title} web_name={val.web_name} link={val.link}/>
//             })}
//         </div>
//     )
// }

// export default Netflix


import React from 'react';
import {list} from './ArrayList1';
import Card from './Card'

function Netflix() {
    return (
        <div>
            {list.map((val)=>
            {
                return <Card img_src={val.img_src} alt={val.alt} title={val.title} details={val.details} web_name={val.web_name} link={val.link} key={val.id} />
            })}
        </div>
    )
}

export default Netflix
