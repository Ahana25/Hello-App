// import React,{useState} from 'react'

// function Form() {
//     let [val,setVal]= useState({
//         fname:'',
//         lname:'',
//         mail:'',
//         mobile:''
// })

// let UpdateVal=(event)=>
// {

//    let v1= event.target.value
//    let v2= event.target.name

//   setVal((prevVal)=>
//   {
//       return(
//         {
//          ...prevVal,
//            [v2]:v1 }
//       )
//   })
// }

//     return (
//         <>
//         <h1 className="h1_tag">Hello {val.fname} {val.lname}</h1>
//       <p className='p1_tag'>{val.mail}</p>
//        <p className="p1_tag">{val.mobile}</p>
//         <div>
//             <div className="form_div">
//          <form>
//            <label htmlFor="fname">
//              <input type="text" name="fname" id="fn" placeholder='Enter your first name' onChange={UpdateVal} value={val.fname} />
//            </label>
//            <label htmlFor="lname">
//              <input type="text" name='lname' id="ln" placeholder="Enter your last name" onChange={UpdateVal} value={val.lname} />
//            </label>
//            <label htmlFor="mail">
//              <input type="email" name='mail' id="mail" placeholder="Enter your email" onChange={UpdateVal} value={val.mail}/>
//            </label>
//            <label htmlFor="mob">
//              <input type="number" name='mobile' id="mob" placeholder="Enter your mobile number" onChange={UpdateVal} value={val.mobile} />
//            </label>
//          </form>
//        </div>
//         </div>
//         </>
//     )
// }

// export default Form



//     else if(v2==='lname')
//     {
//       return(
//         {
//           fname:prevVal.fname,
//           lname:v1,
//           mail:prevVal.mail,
//           mobile:prevVal.mobile
//         }
//       )
//     }
//     else if(v2==='mail')
//     {
//       return(
//         {
//           fname:prevVal.fname,
//           lname:prevVal.lname,
//           mail:v1,
//           mobile:prevVal.mobile
//         }
//       )
//     }
//     else if(v2==='mobile')
//     {
//       return(
//         {
//           fname:prevVal.fname,
//           lname:prevVal.lname,
//           mail:prevVal.mail,
//           mobile:v1
//         }
//       )
//     }
//   })




import React, { useState } from 'react'

function Form() {

  let [val,setVal]=useState(
      {
          fname:'',
          lname:'',
          mail:'',
          mobile:''
      }
  )

  let UpdateVal=(event)=>
  {
      let v1= event.target.value
      let v2= event.target.name

setVal((preVal)=>
{
   return{
       ...preVal,
       [v2]:v1
   }
})

  }

    return (
        <div>
            <div className="main_div">
                <h1 className="h1_tag">Hello {val.fname} {val.lname} </h1>
                <p className="p1_tag">{val.mail}</p>
                <p className="p1_tag">{val.mobile}</p>
                <div className="form_div">
                    <label htmlFor="fname">
                        <input type="text" name="fname" id="fn" value={val.fname} placeholder="Enter your first name" onChange={UpdateVal}/>
                    </label>
                    <label htmlFor="lname">
                        <input type="text" name="lname" id="ln" value={val.lname} placeholder="Enter your last name" onChange={UpdateVal}/>
                    </label>
                    <label htmlFor="mailid">
                        <input type="email" name="mail" id="mail" value={val.mail} placeholder="Enter your mail id" onChange={UpdateVal} />
                    </label>
                    <label htmlFor="mobile">
                        <input type="text" name="mobile" id="mob" value={val.mobile} placeholder="Enter mobile number" onChange={UpdateVal} />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Form
