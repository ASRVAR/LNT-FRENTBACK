import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Registration from "./loginComponent/Registration";
import AllRegistration from "./loginComponent/AllRegistration";
import ViewReg from "./loginComponent/ViewReg";
import Login from "./loginComponent/Login";
import ProductEntry from "./dashboard/formComponent/ProductEntry";
import EmiCalculater from "./dashboard/formComponent/EmiLoan";
import Dashboard from "./dashboard/custumComponent/Dashboard";
import Header from "./dashboard/custumComponent/Header";
import { Sidebar } from "./dashboard/custumComponent/Sidebar";
import AllCustomer from "./dashboard/formComponent/AllCustomer";
import EmployeeRegistration from "./dashboard/formComponent/EmployeeRegistration";

const Home = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <header className="main-header-top hidden-print">
          <Header />
        </header>
        <aside className="main-sidebar hidden-print ">
          <Sidebar />
        </aside>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/product" element={<ProductEntry />} />
          <Route exact path="/allcustomers" element={<AllCustomer />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/registrationview" element={<ViewReg />} />
          <Route exact path="/createemployee" element={<EmployeeRegistration />} />
          <Route exact path="/emicalculater" element={<EmiCalculater />} />
          <Route exact path="/registrationdetails" element={<AllRegistration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
