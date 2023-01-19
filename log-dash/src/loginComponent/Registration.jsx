import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Registration = () => {
  let redirect = useNavigate();
  const tableInitialFieldValue={
    Name: "",
    Email_id: "",
    Mobile_No: "",
    Address: "",
    Photo: "",
    Password: "",
  }
  const [regAdd, setRegAdd] = useState(tableInitialFieldValue);
  const { Name, Email_id, Mobile_No, Address, Photo, Password } = regAdd;
  const onInputChange = (e) => {  
    setRegAdd({ ...regAdd, [e.target.name]:e.target.value });
    console.log({[e.target.name]:e.target.value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/Registration/", regAdd);
    redirect("/login"); //  useNavigate se hm Redirect Karate h Dusre Page Par
  };
        
  return (
    <>
      <section className="login common-img-bg">
		<div className="container-fluid">
			<div className="row">
					<div className="col-sm-12">
						<div className="login-card card-block bg-white">
							<form className="md-float-material"  onSubmit={e => onSubmit(e)}>
								<div className="text-center">
									<img src="assets/images/logo-black.png" alt="logo" />
								</div>
								<h3 className="text-center txt-primary">Create an account </h3>

						  	<div className="md-input-wrapper">
										<input
                    type="text"
                    className="md-form-control"
                    name="Name"
                    value={Name}
                    onChange={(e) => onInputChange(e)}
                  />
											<label>First Name</label>
								</div>
								<div className="md-input-wrapper">
                <input
                    type="text"
                    className="md-form-control"
                    name="Email_id"
                    value={Email_id}
                    onChange={(e) => onInputChange(e)}
                  />
									<label>Email Address</label>
								</div>
								<div className="md-input-wrapper">
                <input
                    type="text"
                    className="md-form-control"
                    name="Mobile_No"
                    value={Mobile_No}
                    onChange={(e) => onInputChange(e)}
                  />
									<label>Mobile Number</label>
								</div>
								<div className="md-input-wrapper">
                <input
                    type="text"
                    className="md-form-control"
                    name="Address"
                    value={Address}
                    onChange={(e) => onInputChange(e)}
                  />
									<label>Address</label>
								</div>
                <div className="col-md-6">
										<div className="md-input-wrapper">
										<input
                    type="password"
                    className="md-form-control"
                    name="Password"
                    value={Password}
                    onChange={(e) => onInputChange(e)}
                  />
											<label>Password</label>
										</div>
									</div>
                <div className="col-md-6">
										<div className="md-input-wrapper">
											<input type="text" className="md-form-control" required="" />
											<label>Conform Password</label>
										</div>
								</div>

								{/* <div className="rkmd-checkbox checkbox-rotate checkbox-ripple b-none m-b-20">
									<label className="input-checkbox checkbox-primary">
										<input type="checkbox" id="checkbox" />
										<span className="checkbox"></span>
									</label>
									<div className="captions">Remember Me</div>
								</div> */}
								<div className="col-xs-10 offset-xs-1">
									<button type="submit" className="btn btn-primary btn-md btn-block waves-effect waves-light m-b-20">Sign up
									</button>
								</div>
								<div className="row">
									<div className="col-xs-12 text-center">
										<span className="text-muted">Already have an account?</span>
										{/* <a href="#" className="f-w-600 p-l-5"> Sign In Here</a> */}
                    <Link className="f-w-600 p-l-5" to={"/login"}> Sign In Here</Link>

									</div>
								</div>
							</form>
						
						</div>
					
					</div>
		
				</div>
	
			</div>
			
	</section>



    </>
  );
};

export default Registration;
