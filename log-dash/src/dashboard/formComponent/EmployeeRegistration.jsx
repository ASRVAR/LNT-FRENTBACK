import axios from "axios";
import React from "react";
import { useState } from "react";

const EmployeeRegistration = () => {
      
    const tableValeue = {
    firstName: "",
    lastNAme: "",
    phoneNumber: "",
    emailId: "",
    Address: "",
    departmentName: "",
    Role: "",
  };
  const [regAdd, setRegAdd] = useState(tableValeue);
 // const { firstName, lastNAme, phoneNumber, emailId,Address,departmentName, Role } = regAdd;
  const onInputChange = (e) => {  
    setRegAdd({ ...regAdd, [e.target.name]:e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:33993/api/Registration/Registration", regAdd);
    alert("Data Added Succefully...!!");
    
    // this.firstName.value="";
    // this.lastNAme.value="";
    // this.phoneNumber.value="";
    // this.emailId.value="";
    // this.Address.value="";
    // this.departmentName.value="";
    // this.Role.value="";

    //redirect("/registrationDetails"); //  useNavigate se hm Redirect Karate h Dusre Page Par
  };
  
  
 
  return (
    <>
      <div className="content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 p-0">
              <div className="main-header">
                <h4>Employee Registration</h4>
                <ol className="breadcrumb breadcrumb-title breadcrumb-arrow">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="icofont icofont-home"></i>
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Forms Components</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="form-elements-bootstrap.html">
                      Employee Registration
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card-header">
                <h5 className="card-header-text">Employee Registration</h5>
                <div className="f-right">
                  <a
                    href=""
                    data-toggle="modal"
                    data-target="#textual-input-Modal"
                  >
                    <i className="icofont icofont-code-alt"></i>
                  </a>
                </div>
              </div>
              <div
                className="modal fade modal-flex"
                id="textual-input-Modal"
                tabIndex="-1"
                role="dialog"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h5 className="modal-title">
                        Our Company Employee Registration{" "}
                       
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-block">
                <form onSubmit={e => onSubmit(e)}>
                  <div className="col-md-4">
                    <div className="form-group ">
                      <label className="form-control-label">First Name</label>
                      <input
                        type="text"
                        className="form-control form-control-success"
                        name="firstname"
                          defaultValue={regAdd.firstName}
                        onChange={(e) => onInputChange(e)}
                      
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group ">
                      <label className="form-control-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control form-control-success"
                        name="lastname"
                            defaultValue={regAdd.lastNAme}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group ">
                      <label className="form-control-label">Phone Number</label>
                      <input
                        type="text"
                        className="form-control form-control-success"
                        name="phonenumber"
                            defaultValue={regAdd.phoneNumber}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group ">
                      <label className="form-control-label">Email Id</label>
                      <input
                        type="text"
                        className="form-control form-control-success"
                        name="emailid"
                            defaultValue={regAdd.emailId}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="form-control-label">Address</label>
                      <input
                        type="text"
                        className="form-control form-control-success"
                        name="address"
                            defaultValue={regAdd.Address}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group ">
                      <label className="form-control-label">Department</label>
                      <input
                        type="text"
                        className="form-control form-control-success"
                        name="department"
                            defaultValue={regAdd.departmentName}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group ">
                      <label className="form-control-label">Role</label>
                      <input
                        type="text"
                        className="form-control form-control-success"
                        name="role"
                            defaultValue={regAdd.Role}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <button
                      type="submit" 
                      className="btn btn-primary waves-effect waves-light m-r-30"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeRegistration;
