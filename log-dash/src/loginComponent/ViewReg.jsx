import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const ViewReg = () => {

  const [regis, setRegis] = useState([]);
  useEffect(() => {
    // console.log("Kya ho raha h")
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/Registration/");
    setRegis(result.data);
  };

  const deleteRegistration = async id =>{
    await axios.delete(`http://localhost:5000/api/Registration/${id}`);
     loadUsers();
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
                <th scope="col">Action</th>
              </tr>
                          </thead>
                          <tbody>
                          {
                 regis.map((regis,index)=>(
                     <tr key={regis.Reg_id}>
                         <th scope="row">{index+1}</th>
                         <td>{regis.Name}</td>
                         <td>{regis.Email_id}</td>
                         <td>{regis.Mobile_No}</td>
                      
                         <td > 
                         <Link className="btn btn-outline-success mx-2" to="/registrationdetails"> View</Link>
                         <Link className="btn btn-outline-primary mx-2" to={`/EditRegistration/${regis.Reg_id}`}> Edit</Link>
                         <button className="btn btn-outline-danger" onClick={()=>deleteRegistration(regis.Reg_id)}> Delete</button>
                         </td>
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
  );
};

export default ViewReg;
