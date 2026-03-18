import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [isLoading, setLoading] = useState(false);
    const [phonenumber, setPhonenumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigation = useNavigate();

    const  handleLogin = async () => {
           setLoading(true)
        try {
            
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts",
                {
                    title: phonenumber,
                    body: password,
                    userId: 1
                }

            )
            if (!response.data) {
                setError(error);
            }
            if (response.status === 201) {
                localStorage.setItem("token","dummy token");
                navigation("/home");
            }
        }
        catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <input placeholder='Phonenumber' value={phonenumber} onChange ={(e) => setPhonenumber(e.target.value)}></input>
            <input placeholder='password' type='password' value = {password} onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick ={handleLogin}
            disabled={isLoading}>

                {isLoading ? "Logging in.." : "Login"}
            </button>
            {error && <p>{error}</p>}
        </div>
    )
}

