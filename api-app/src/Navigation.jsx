import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';


export class Navigation extends Component{
    render(){
        return(
            <>
            <div className='container'>
           <Navbar bg='info' expand="lg" >
           <Navbar.Toggle aria-controls='basic-navbar-nab'/>
           <Navbar.Collapse id='basic-navbar-nav'>
               <Nav>
                   <NavLink className='d-inline p-2 text-white' to="/" style={{textDecoration:'none'}}>
                       Home
                       </NavLink>
                       <NavLink className='d-inline p-2 text-white' to="/department" style={{textDecoration:'none'}}>
                           Department
                           </NavLink>

                           <NavLink className='d-inline p-2 text-white' to="/employee" style={{textDecoration:'none'}}>
                               Employee
                               </NavLink>
                   </Nav>               
               </Navbar.Collapse>   
           </Navbar>
           </div>
           </>
        )
     }
}