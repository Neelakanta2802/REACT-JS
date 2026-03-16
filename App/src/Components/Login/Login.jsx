import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const nav = useNavigate();


    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const data = {
        userName,
        password
    }
    
    function handleLogin() {
        const response = axios.post('https://amazon.com', data)
        console.log(response);

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