import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactSale() {
  let redirect = useNavigate();
  const tableInitialFieldValue={
    customerName: "",
    purchasesProduct: "",
    paymentType: "",
   
  }
  const [regAdd, setRegAdd] = useState(tableInitialFieldValue);
  const onInputChange = (e) => {  
    setRegAdd({ ...regAdd, [e.target.customername]:e.target.value });
    console.log({[e.target.customername]:e.target.value});
  };
  console.log(regAdd);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:33993/api/Customer/InsertCustomer", regAdd);
    redirect("/dashboard"); //  useNavigate se hm Redirect Karate h Dusre Page Par
  };

  return (
    <>  
      <div className="content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 p-0">
              <div className="main-header">
                <h4>Product Entry</h4>
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
                    <a href="form-elements-bootstrap.html">Product Entry</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card-header">
                <h5 className="card-header-text">Product Entry</h5>
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
                tabindex="-1"
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
                        Code Explanation For Textual Input Types{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-block">
              <form  onSubmit={e => onSubmit(e)}>
                <div className="col-md-4">
                  <div className="form-group ">
                    <label className="form-control-label" for="inputSuccess1">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-success"
                      name="customername"
                      defaultValue={regAdd.customerName}
                      onChange={(e) => onInputChange(e)}
                    />
                 
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group ">
                    <label className="form-control-label" for="inputSuccess1">
                       Purchage Product
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-success"
                      name="purchageproduct"
                      defaultValue={regAdd.purchasesProduct}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group ">
                    <label className="form-control-label" for="inputSuccess1">
                       Payment
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-success"
                      name="paymenttype"
                      defaultValue={regAdd.paymentType}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                {/* <div className="col-md-4">
                  <div className="form-group ">
                    <label className="form-control-label" for="inputSuccess1">
                      Price
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-success"
                      name="inputSuccess1"
                    />
                  </div>
                </div> */}
                <div className="col-md-9">
               <button type="submit" className="btn btn-primary waves-effect waves-light m-r-30">Save</button>
             </div>
</form>
              </div>
            
            </div>
           
         
          </div>
         
        </div>
      </div>
    </>
  );
}

export default ContactSale;
