import React from 'react';
import{NavLink} from 'react-router-dom' 


function Menu() {
    return (
        <div>
           <div className="header_div">
               <header>
                   <nav>
                     <li><NavLink to='/' exact activeClassName="active_class" id="home">Home</NavLink> </li> 
                      <li><NavLink to='/about' exact activeClassName="active_class" id="about">About</NavLink></li>
                      <li><NavLink to='./contact' exact activeClassName="active_class" id="contact">Contact</NavLink></li> 
                      <li><NavLink to='/career' exact activeClassName="active_class" id="career">Career</NavLink></li> 
                      <li><NavLink to='/help' exact activeClassName="active_class" id="help">Help</NavLink></li>
                   </nav>
               </header>
           </div> 
        </div>
    )
}

export default Menu
