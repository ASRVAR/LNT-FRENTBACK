import React from "react";
import { useState } from "react";
import axios from 'axios'; 
import { BrowserRouter, Route, Link,useNavigate,useHistory} from "react-router-dom";

const Login = (props) => {
	const [user, setUser] = useState({ Email_id: '', Password: ''});  
    const apiUrl = "http://localhost:5000/api/Registration/";    
    const Login = (e) => {    
            e.preventDefault();    
            // debugger;   
            const data = { Email_id:user.Email_id, Password: user.Password };    
            axios.get(apiUrl, data)    
            .then((result) => {    
                debugger;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
               var a= localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                const user =result.data.UserDetails;  
                console.log(result.data.message);  
                if (result.data.status === '200')    
                    props.history.push('/registrationDetails')    
                else    
                alert('Invalid User');    
            })        
          };    
          
          const onChange = (e) => {    
                e.persist();    
                // debugger;    
                setUser({...user, [e.target.name]: e.target.value});    
              }  
  return (

    <div>

<section className="login p-fixed d-flex text-center bg-primary common-img-bg">
	<div className="container-fluid">
		<div className="row">
			<div className="col-sm-12">
				<div className="login-card card-block">
					<form className="md-float-material" onSubmit={Login}>
						<div className="text-center">
							<img src="./assets/images/logo-black.png" alt="logo" />
						</div>
						<h3 className="text-center txt-primary">
							Sign In to your account
						</h3>
						<div className="row">
							<div className="col-md-12">
								<div className="md-input-wrapper">
									<input type="email" className="md-form-control" required="required"
									value={user.Email_id} onChange={ onChange }  name="Email_id" id="Email_id"/>
									<label>Email</label>
								</div>
							</div>
							<div className="col-md-12">
								<div className="md-input-wrapper">
									<input type="password" className="md-form-control" required="required" 
									value={user.Password} onChange={ onChange }  name="Password" id="Password"/>
									<label>Password</label>
								</div>
							</div>
							<div className="col-sm-6 col-xs-12">
							<div className="rkmd-checkbox checkbox-rotate checkbox-ripple m-b-25">
								<label className="input-checkbox checkbox-primary">
									<input type="checkbox" id="checkbox" />
									<span className="checkbox"></span>
								</label>
								<div className="captions">Remember Me</div>
							</div>
								</div>
							<div className="col-sm-6 col-xs-12 forgot-phone text-right">
								<a href="forgot-password.html" className="text-right f-w-600"> Forget Password?</a>
								</div>
						</div>
						<div className="row">
							<div className="col-xs-10 offset-xs-1">
								<button  type="submit" className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">LOGIN</button>
							</div>
						</div>
					 <div className="card-footer">
						<div className="col-sm-12 col-xs-12 text-center">
							<span className="text-muted">Don't have an account?</span>
					  
                      <Link className="f-w-600 p-l-5" to={"/registration"}>Sign up Now</Link> 
			
						</div>
					</div>
					</form>			
				</div>			
			</div>		
		</div>
	</div>
</section>

    </div>

  );
};

export default Login;
