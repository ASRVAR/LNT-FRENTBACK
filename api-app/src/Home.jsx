import React,{Component} from 'react';
import mainImg from './Images/main.png';
import { Employee } from './Employee';
import { Department } from './Department';
//import BoxCard from './cardComponent/CardBox';
import TextForm from './textFormComponent/TextForm';
import About from './aboutComponent/About';


export class Home extends Component{
  
    render(){
        return(
            <>
         
              
            <div className='container'>
               <About />
            </div>
      <div className="container">
      <TextForm title="Enter The Text" /> 
      </div>
     <div className="container">
          <div className='row'>
              <div className='col-md-12'>
              <Employee />
              </div>
              <div className='col-md-12'>
              <Department />  
              </div>
          </div>
     </div>
       
        </>
        )
    }
}