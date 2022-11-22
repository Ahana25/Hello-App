// The most important file in the entire react application is the index.html file, the only html file in our application. Note that we do not need to even touch the index.html file.
//The file where almost all our work will be done is the index.js file which imports two main modules. They are, React(used for JSX) and ReactDOM(For DOM manipulation in thre html file).

// var React=require('react');
// var ReactDOM=require('react-dom');            //while writing this React automatically gives us two things: Babel compiler (which is used to compile modren JavaScriopt codes i.i.ECMA script into ES-5 version that can be interpreted by the browser as modern browsers do not understand ES-6 or advanced JacaScript features. )
//To render multiple elements inside the render method, as we know that the render method takes in only one parameter for what item to place, we need to wrap these multiple jsx elements into a div container to make it possible for the render method to access it as am single element. Upon introduction of React version 16 and above, we can avoid the use of div and go for the syntax of declaring an array with sqaure brackets wherein making it an array of elements.Using div introduces an additional node in the html document by the browser which may make it difficult during styling and adding flex box etc. This is the reason why we shifted from div to React.Fragments which eleminates thi spossibilty and makes the code run faster and even consume less memory.We could also totaklly scrap off the use of React fragment by using a syntactic sugar coating of just the balnk tags.
// import React from 'react';
// import ReactDOM from 'react-dom';

// let name="Ahana"
// let age=22
// let sub=["physics","biology ","english ","history"]

// ReactDOM.render(    
//  <>
//    <h1>{`My name is ${name} and my age is ${age}.My favourite subjects are listed as${sub}`}</h1>
   
//  </>
//  ,
//     document.getElementById('root')                         //render is a method of ReactDOM which takes in three parameters: first: what to show,second:where to show,third: callback function.
//date in // format comes with toLocalString
// );


// import React from 'react';
// import ReactDOM from 'react-dom';

// let name="Ahana"
// let date= new Date();

// ReactDOM.render(
//   <>
//   <h1>{`Hello,my name is ${name}`}</h1>
//   <p>{`Here displaying the current date:${date.toLocaleDateString()}`}</p>       
//   <p>{`Then current time is ${date.toLocaleTimeString()}`}</p>
//   </>,
//   document.getElementById('root')
// );


//JSX Attributes


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// let img1='https://picsum.photos/200/300'
// let img2='https://picsum.photos/400/300'
// let img3='https://picsum.photos/300/300'
// let img4='https://picsum.photos/200/300'
// // let img5='https://picsum.photos/300/300'

// ReactDOM.render(
//   <>
//   <h1 className="heading_h1">This calssifies as the heading for our Web Page</h1>
//    <div className="img_div">
//      <img src={img1} alt="Random Image" />
//      <img src={img2} alt="Random Image" />
//      <img src={img3} alt="Random Image" />
//      <img src={img4} alt="Random Image" />
//    </div>
//   </>,
//   document.getElementById('root')
// );


// let h1= document.createElement('h1');
// let text=document.createTextNode('Hello World!!!!');             //using vanilla JS
// h1.appendChild(text);
// document.getElementById('root').appendChild(h1)



//React Challenge #3

// import React from 'react';
// import ReactDom from 'react-dom';
// let val1;
// let span_val={};
// let date=new Date();
// if((date.getHours()>=1)&&(date.getHours()<=11))
// {
//   val1="Good Morning!"
//   span_val.color='red'
// }
// else if((date.getHours()>=12)&&(date.getHours()<=19))
// {
//  val1="Good Afternoon!"
//  span_val.color='orange'

// }
// else if((date.getHours()>=20)&&(date.getHours()<=0))
// {
//  val1="Good Evening!"
//  span_val.color='blue'

// }

// let h1_heading=
// {
//   color:'blue',
//   textTransform:'capitalize',
//   textAlign:'center',
//   margin:'-43px',
//   padding:'4px',
//   textShadow: '1px 4px 15px rgb(20, 1, 1)'
// }



// ReactDom.render(
//   <>
//   <div className="div">
//   <h1 style={h1_heading}>Hello Sir,<span style={span_val}>{val1}</span></h1>
//   </div>
//   </>,
//   document.getElementById('root')
// );



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
 

ReactDOM.render(
<>
<BrowserRouter><App/></BrowserRouter>
</>
,document.getElementById('root'));















