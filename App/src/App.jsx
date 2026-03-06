import { useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');
  const [isLogged,setisLogged] = useState(false);
  const nav = useNavigate();

  function handlelogin(){
   if(!username || !password){
    seterror('fill all fields');
    return;
   }
   if(username === "ZR1234" && password === "PASS123"){
    nav('/dashboard');
   }
   else{
    seterror("Invalid Login Credentials");
    return;
   }
  }
  
  return (
    <>
    <Routes>
      <Route path="/" element={
        <div>
          <input 
          type="text"
          placeholder="Enter your username"
          value = {username}
          onChange={(e)=>setusername(e.target.value)}
          />
          

          <input 
          type="password"
          placeholder="Enter your password"
          value = {password}
          onChange={(e)=>setpassword(e.target.value)}
          />
          <button onClick={handlelogin}>Login</button>
          <p>{error}</p>
        </div>
      } />
      <Route path="/dashboard" element={<Dashboard/>} />
    
    </Routes>
    </>
  );
}

export default App;