import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const nav = useNavigate();
   const[userName,setuserName] = useState("");
    const[password,setpassword] = useState("");
    function handleLogin() {
    
        if (userName === "NANI" && password === "pass123") {
            nav("/dashboard");
            <p>JaiBabu</p>
        }
    }

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={userName}
                    onChange={(e) => setuserName(e.target.value)}
                />


                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            
            </div>
            {userName}
            {password}
        </>
    )
}
export default Login