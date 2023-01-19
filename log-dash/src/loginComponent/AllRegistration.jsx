import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

function AllRegistration() {
    const [Data, setAllData]= useState([]);

    useEffect(()=>{
        AllData();
    },[]);
    const AllData = async ()=>{
       const AllRegistrationData = await axios.get("http://localhost:5000/api/Registration/");
        setAllData(AllRegistrationData.data);
    }

  return (
    
        <div>

<div class="wrapper">
        <div class="content-wrapper">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12 p-0">
                <div class="main-header">
                  <h4>All Registration </h4>
                  <ol class="breadcrumb breadcrumb-title breadcrumb-arrow">
                    <li class="breadcrumb-item">
                      <a href="index.html">
                        <i class="icofont icofont-home"></i>
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="#">Customer</a>
                    </li>
                    <li class="breadcrumb-item">
                      <Link to="/customer">Add Customer</Link>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5 class="card-header-text">All Customers</h5>
                    <p>
                      Basic example{" "}
                      <code>without any additional modification</code> customers
                    </p>
                  </div>
                  <div class="card-block">
                    <div class="row">
                      <div class="col-sm-12 table-responsive">
                        <table class="table">
                          <thead>
                          <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email Id </th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Address</th>
                <th scope="col">Password</th>
              </tr>
                          </thead>
                          <tbody>
                          {
                 Data.map((Data,index)=>(
                     <tr key={Data.Reg_id}>
                         <th scope="row">{index+1}</th>
                         <td>{Data.Name}</td>
                         <td>{Data.Email_id}</td>
                         <td>{Data.Mobile_No}</td>
                         <td>{Data.Address}</td>
                         <td>{Data.Password}</td>
                     </tr>
                 ))
             }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
   
  )
}

export default AllRegistration