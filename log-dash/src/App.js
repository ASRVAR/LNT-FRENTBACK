import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./loginComponent/Login";
import Registration from "./loginComponent/Registration";
import AllCustomer from "./dashboard/formComponent/AllCustomer";

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        {/* <Registration /> */}
        <Login />
       
      </BrowserRouter>
    </>
  );
}

export default App;
