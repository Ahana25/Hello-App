// import Heading from './Heading';
// import Para from './Para';
// import List from './List';
import React from 'react';
import {Route, Switch} from "react-router-dom";
import Error from './Error';
import Career from './Career';
import Help from './Help';
import Phone from './Phone';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Menu from './Menu';
import './index.css'


 
// import Poke from './Poke'
// import Covid from './Covid';
// import { createContext } from 'react';
// import CompA from './CompA';
// import Netflix from './Netflix';
// import Amazon from './Amazon'
// import MyAccordion from './MyAccordion'
// import './App.css';
// import './index.css'


// function App() {
//   return (
//     <>
//   <Heading/>
//  <Para/>
//   <List/>
//   </>
//   );
// }

// export default App;




//React challenge #3 using Components

// import React from 'react';
// import Heading from './Heading';

// let date= new Date();
// let val;
// if((date.getHours()>=1)&&(date.getHours()<=11))
// {
//   val="Good Morning!"
// }
// else if((date.getHours()>=12)&&(date.getHours()<=19))
// {
//   val="Good Afternoon!"
// }
// else if((date.getHours()>=20)&&(date.getHours()<=0))
// {
//   val="Good evening!"
// }

// function App() {
//   return (
//     <div>
//      <h1>Hello sir,{val}</h1>
//     </div>
//   )
// }

// export default App




// import React from 'react'
// import {add,sub,div,mul} from './Heading'
// function App() {
//   return (
//     <div>
//     <ol>
//       <li>Sum of two numbers is {add(3,10)}</li>
//       <li>Substraction of two numbers is {sub(10,3)}</li>
//       <li>Division of two numbers is {div(10,3)} </li>
//       <li>Multiplication of two numbers is {mul(10,3)} </li>
//       </ol>
//     </div>
//   )
// }

// export default App



// import React from 'react';
// import './index.css';
// import Netflix from './Netflix';
// import Amazon from './Amazon';



// function App() {
//   let listCall=()=>
// {
//   let watch;
//   watch=alert('Choose 1 for Netflix and 2 for Amazon Prime');
//   if(watch==1)
//   {
//     list1.map((val)=>
//   {
//      return(
//        <Card key ={val.id}img_src={val.img_src} alt_title={val.alt_title} title={val.title} web_name={val.web_name} link={val.link}/>
//      )
//   })
//   }

//   else
//   {
//     list2.map((val)=>
//   {
//      return(
//        <Card key ={val.id}img_src={val.img_src} alt_title={val.alt_title} title={val.title} web_name={val.web_name} link={val.link}/>
//      )
//   })
//   }
// }
//   return (

//     <div>
//     <div className="h1_div"><h1 className="h1_tag">Top 5 Netflix recommendation</h1></div>
//         <listCall/>
//     </div>
//   )
// }

// export default App






// let watch=prompt('Enter 1 for Netflix and 2 for Amazon')

  // if(watch==='1')
  // {
  //   return(
  //     <>
  //     <Card key ={list[0].id}img_src={list[0].img_src} alt_title={list[0].alt_title} title={list[0].title} web_name={list[0].web_name} link={list[0].link}/>
  //   </>)
  // }
  // else if(watch==='2')
  // {
  //   return(
  //     <>
    
  //   <Card key ={list[7].id}img_src={list[7].img_src} alt_title={list[7].alt_title} title={list[7].title} web_name={list[7].web_name} link={list[7].link}/>
  // </>)}

// let val;
// let date= new Date();
// if((date.getHours()>=1)&&(date.getHours()<=11))
// {
//   val="Good Morning!"
// }
// else if((date.getHours()>=12)&&(date.getHours()<=19))
// {
//   val="Good Afternoon!"
// }
// else if((date.getHours()>=20)&&(date.getHours()<=0))
// {
//   val="Good Evening!"
// }
// function App() {
//   return (
//     <div>
      // { {  watch==='1'?(<Netflix/>):(<Amazon/>)}}

//       <h1>Hello Sir,{val}</h1>
//     </div>
//   )
// }

// export default App




// import React from 'react';
// import Slot from './Slot';
// import {emojiList} from './ArrayList1';
// import './index.css'

// function App() {

  
//   return (
//     <div className="outer_div">
//     <div className="heading_div"><h1 className="h1_tag">Welcome to <span className="span_tag">The Slot Machine</span></h1></div>
//       <div className="slot_div">
//       {emojiList.map((emo)=>
//       {
//         return <Slot val1={emo.x} val2={emo.y} val3={emo.z}/>
//       })}
//       </div>
//     </div>
//   )
// }

// export default App


//Hooks are a feature of functional components that is used at the top level of these functions. They are used to hook a particular value to an item.
//useState is a react hook that is a function, therefore it can take arguments and in return gives us an array having 2 items, the first item is a value and the secind item is  a function. We use array destructuring to access these values which is an ES-06 property. the first value receives the current data and the function is used for updating the data. So we pass the initial value in use state as an argument, the current value is in item1 and the updated value is in item2 which is the function.

// import React,{useState} from 'react';

// function App() {
//   let [val,setVal]=useState(0);          //0 signifies the initial value that is it. Now setVal is a function that is used to update the value of val.

// let UpdateVal=()=>
// {
//   setVal(val-10);
// }

//   return (
//     <div>
//       <h1>{val}</h1>
//       <button onClick={UpdateVal}>Click Here</button>
//     </div>
//   )
// }


//A digital clock


// import React, { useState } from 'react'

// function App() {
//   let time =new Date().toLocaleTimeString()
//   let [timeval,setTime]=useState(time)
// setInterval(() => {
//   let time = new Date().toLocaleTimeString();
//   setTime(time);
// }, 1000);
  
//   return (
//     <div>
//       <h1>{timeval}</h1>
//       {/* <button onChange={UpdateTime}>Click Me to update</button> */}
//     </div>
//   )
// }

// export default App



// Events in React js.Chnaging on button click

// import React, { useState } from 'react';
// import './index.css'

// function App() {
//   let [val,setval]=useState('Click me');
// let UpdateText=()=>
// {
//   setval('ouch!!')
//   let colorval= document.body
//   let btncolor=document.getElementsByClassName('btn_tag')[0]
//   btncolor.style.backgroundColor="blue"
//   btncolor.style.color="white"
//   colorval.style.backgroundColor="pink"
// }
// let UpdateDoubleText=()=>
// {
//   setval('you did it again!');
//   let colorval= document.body
//   colorval.style.backgroundColor="violet"
//   let btncolor=document.getElementsByClassName('btn_tag')[0]
//   btncolor.style.backgroundColor="green"
//   btncolor.style.color="white"
// }
//   return (
//     <div>
//       <button onClick={UpdateText} onDoubleClick={UpdateDoubleText} className="btn_tag">{val}</button>
//     </div>
//   )
// }

// export default App


//form login using only one input field

// import React, { useState } from 'react'

// function App() {
// let [str,setStr]=useState('')
// let ChangeVal=(event)=>
// {
//   setStr(event.target.value)
// }

// let[input,setInput]=useState()
// let UpdateVal=(event)=>
// {
//   event.preventDefault()
//   setInput(str)
// }

//   return (
//     <div>
//       <h1>Hello {input}</h1>
//       <div>
//       <form>
//           <label htmlFor="input">
//             <input type="text" placeholder="Enter your name" id="input_text" value={str} onChange={ChangeVal} />
//           </label>
//           <button onClick={UpdateVal}>Click to Submit</button>
//           </form>
//       </div>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// function App() {

// let [str,setStr]=useState({
//   name:'',
//   password:''
// });
// let UpdateStr=(event)=>
// {
//   let val_name= event.target.value
//   let val_pass=event.target.name
//   event.preventDefault()
//   setStr(()=>
//   {
//     if(val_name==='name')
//     {
//       return(val_name)
//     }
//     else{
//       return(val_pass)
//     }
//   })

// }
//   return (
//     <div>
//       <h1>Hello {str.name} {str.password}</h1>
//       <div>
//         <form>
//           <label htmlFor="input">
//             <input type="text" placeholder="Enter your name" value={str.name} onChange={UpdateStr}name="name" />
//           </label>
//           <label htmlFor="password">
//             <input type="password" name="pass" id="password" placeholder="Enter your password" onChange={UpdateStr} value={str.password} name="password"/>
//           </label>
//           <button>Submit</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react';

// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import RemoveIcon from '@material-ui/icons/Remove';
// import './index.css';
// import { Button, Fab,Tooltip,AddIcon } from '@material-ui/core';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Amazon from './Amazon';
// import Time from './Time';
// import IncDec from './IncDec';

// function App() {

// let [val,setVal]= useState(
//   {
//     fname:'',
//     lname:'',
//     mail:'',
//     mobile:''
//   }
// )

// let UpdateVal=(event)=>
// {

//    let v1= event.target.value
//    let v2= event.target.name

//   setVal((prevVal)=>
//   {
//     if(v2==='fname')
//     {
//       return(
//         {
//           fname:v1,
//           lname:prevVal.lname,
//           mail:prevVal.mail,
//           mobile:prevVal.mobile
//         }
//       )
//     }
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

// }

//   return (
//     <div className="main_div">
//        {/* <Form onChange={UpdateVal} value={val}/> */}
//        <Form/>

       
//     </div>
//   )
// }

// export default App


{/* <div className="form_div">
         <form>
           <label htmlFor="fname">
             <input type="text" name="fname" id="fn" placeholder='Enter your first name' onChange={UpdateVal} value={val.fname} />
           </label>
           <label htmlFor="lname">
             <input type="text" name="lname" id="ln" placeholder="Enter your last name" onChange={UpdateVal} value={val.lname} />
           </label>
           <label htmlFor="mail">
             <input type="email" name="mail" id="mail" placeholder="Enter your email" onChange={UpdateVal} value={val.mail}/>
           </label>
           <label htmlFor="mob">
             <input type="number" name="mobile" id="mob" placeholder="Enter your mobile number" onChange={UpdateVal} value={val.mobile} />
           </label>
           <button className="btn_tag">Click Here 👍</button>
         </form>
       </div> */}



// import React from 'react';
// import Form from './Form';
// import './index.css'


// function App() {
//   return (
//     <div>
//       <Form/>
//       <button className="btn_tag">Click Here 👍</button>
//     </div>
//   )
// }

// export default App




// React Challenge to increment and decrement values on button click


// let btn=
// {
//     boxShadow: '2px 2px 4px black',
//     padding: '20px'
// }

// let inner_div={
//   margin:'-110px'
  
// }


// function App() {
//   let [val,setVal]= useState(0)
//   let IncVal=()=>
//   {
//     setVal(val+1);
//   }
//   let DecVal=()=>
//   {
//     setVal(val-1);
//   }
//   return (
//     <div>
//       <div className="main_div">
      {/* <div className="inner_div" style={inner_div}>
        <div className="h1_div"><h1>{val}</h1></div>
        <Tooltip title="Add">
        <Button variant="contained" color="primary" onClick={IncVal} className="btn1_tag" style={btn}><AddCircleIcon/>
        </Button>
        </Tooltip>
        <Tooltip title="Delete">
        <Button onClick={DecVal} className="btn2_tag" color="primary" style={
        btn} variant="contained"><RemoveIcon/></Button></Tooltip>
        </div>
      </div>
    </div>
  )
}

export default App */}

{/* <Button variant="contained" color="primary" onClick={IncVal} className="btn1_tag"><AddCircleIcon/>
  Primary
</Button> */}
// function App() {
 
//   let watch=prompt('Enter 1 for Netflix and 2 for amazon prime')

//   return (
//     <div>
//       {
//       watch==='1'?(<Netflix/>):(<Amazon/>)
//       }
//     </div>
//   )
// }

// export default App



//Practice question 1: Build a web page where there is a increment-decrement component, followed by Netflix and Amazon cards display. There is also a place to show the time on a continous basis.


// import React from 'react';

// function App() {
//   // let see= prompt('Enter 1 for Netflix and 2 for Amazon')
//   return (
//     <div>
//       {/* <Time/>
//       <IncDec/>
//       {(see==='1'?(<Netflix/>):(<Amazon/>))} */}

//        <h1 className="text-black text-center text-capitalize m-3 p-3 text-decoration-underline">Hello World</h1>
     
//     </div>
//   )
// }

// export default App



//Craete an Accordion using React




// function App() {
//   return (
//     <div><h1>React Interview Questions</h1>
//     <div></div>
//       {list.map((val)=>
//       {
//         return <MyAccordion ques={val.ques} ans={val.ans} key={val.id}/>
//       })}
//     </div>
//   )
// }

// export default App


//create a netflix and amazon recommendatioon website and on click display the details of the series and on second click hide the result.





// function App() {

//   let watch=prompt('Enter 1 for Netflix and 2 for Amazon')

//   return (
//     <div>
//       {watch==='1'?<Netflix/>:<Amazon/>}
//     </div>
//   )
// }

// export default App



//Context API:Context API is used to pass data to any selected child component without the need of going through each and every in between componentswith the help of props.
//Context API has three main functionalities/ levels:

//usecontext function to declare or create a context.

//provider: The one transmitting/sending the context.

//consumer:The one receiving the context.

// let ImgVal1= createContext();


// function App() {
//   return (
//     <div>
//     <ImgVal1.Provider value={'https://i.pinimg.com/750x/ed/a7/4a/eda74a97ce09fffbc63920c1c3d53bf8.jpg'}><CompA/></ImgVal1.Provider>
      
//     </div>
//   )
// }

// export default App;
// export {ImgVal1}

//createContext,Provider and then for Consumer we have a new hook defined known as useContext.



//useEffect Hook to run a part of code after rendering it.


// function App() {

// const [val, setVal] = useState(0)
// let UpdateVal=()=>
// {
//   setVal(val+1);
// }

// useEffect(()=>
// {
//   return (
//     document.getElementById('title').innerHTML=`Clicked ${val} times`
//   )
// },[val])



//   return (
//     <div>
//       <button onClick={UpdateVal}>Click Here {val}</button>
//     </div>
//   )
// }

// export default App



//Live covid-19 Tracker App



// function App() {
//   return (
//     <div>
//       <Covid/>
//     </div>
//   )
// }

// export default App


//get data using axios and fetch pokemon data




function App() {
  return (
    <div>
    <Menu/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route path='/contact/phone' component={Phone}/>
      <Route exact path='/career' component={Career}/>
      <Route exact path='/help' component={Help}/>
      <Route component={Error}/>
      </Switch>
    </div>
  )
}

export default App
