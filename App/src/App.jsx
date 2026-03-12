import React from "react";
import { useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";

import axios from "axios";
import Login from "./Components/Login/Login";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  

   sessionStorage.setItem("userName","NANI")
    sessionStorage.setItem("password","PASS123")
  
  
  return (
    <>
    <Routes>
      <Route path="/" element={ < Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    
    </Routes>
    </>
  );
}

export default App;