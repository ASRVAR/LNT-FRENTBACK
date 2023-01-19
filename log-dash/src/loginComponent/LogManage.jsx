import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";


const LogManage = () => {
  return (   
      <BrowserRouter>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
      </BrowserRouter>
  );
};
export default LogManage;
