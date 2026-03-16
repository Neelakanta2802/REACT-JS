import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function RestaurentList() {
    const [data, setdata] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setdata(response.data);
            }
             catch (err) {
                setError("Failed to fetch restaurents");
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    if (isLoading) {
        return <h2>Loading restaurents</h2>;
    }
    if (error) {
        return <h2>{error}</h2>
    }


    return (
        <div>
            <h1>Restaurent List</h1>
            {data.map((restaurent) => (
                <div key={restaurent.id}>
                    <h3>{restaurent.name}</h3>
                    <p>{restaurent.email}</p>
                    <p>{restaurent.phone}</p>
                </div>
            ))}

        </div>
    );
}
