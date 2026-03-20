import React from "react";
import { useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

import axios from "axios";
import Login from "./Components/Login/Login";
import RestaurentList from "./Components/RestaurentList/RestaurentList";
import Home from "./Components/Home/Home";
import PromiseDemo from "./Components/PromiseDemo/PromiseDemo";


function App() {




  return (
    <>
    
      <BrowserRouter>
      < PromiseDemo/>
        <Routes>
          <Route path="/login" element={< Login />} />
         <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>
        </Routes>
      </BrowserRouter>

      


    </>
  );
}

export default App;