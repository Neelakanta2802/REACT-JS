import { useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/Login/Login";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const nav = useNavigate();

   localStorage.setItem("userName","NANI")
    localStorage.setItem("password","PASS123")
  
  
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