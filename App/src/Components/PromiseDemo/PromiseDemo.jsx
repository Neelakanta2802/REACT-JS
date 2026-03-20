import React from 'react'
import { useState } from 'react';
import axios from 'axios';


export default function PromiseDemo() {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [status, setStatus] = useState("");

    
        const fetchData = async () => {
            try {
                setStatus("PENDING");
                setData(null);
                setError(null);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
                setData(response.data);
                
                setStatus("FULFILLED");
            }
            catch (error) {
                
                setError(error.message);
                setStatus("REJECTED");
            }

        }
    

    
        const fetchInvalidURL = async () => {
            try {
                setStatus("PENDING");
                const response = await axios.get('https://this-url-does-not-exist.xyz/api');
                setData(response.data);
                

            }
            catch (error) {
                setError(error.message);
                setStatus("REJECTED");
            }

        }
    

    const slowPromise = async () => { 
        setStatus("PENDING");
        setData(null)
        setError(null)

        try{
            const result = await new Promise((resolve,reject) => {
                setTimeout(( ) => {
                    resolve("Done after 3 sec");
                },3000)

            })

            setData(result);
            setStatus("FULFILLED");

        }
        catch(err){
            setError(err.message);
            setStatus("REJECTED");
        }
        
    }
    

    return (
        <div>
            <button onClick={fetchData}>fetch valid data</button>
            <button onClick={fetchInvalidURL}>fetch Invalid url</button>
            <button onClick={slowPromise}>Slow promise</button>

            {status === 'PENDING' && <p>Loading....</p>}
            {status === 'FULFILLED' && (
                <div> 
                    <h3>Success</h3>
                    <pre>{JSON.stringify(data,null,2)}</pre>
                </div>
            )}
            {status === 'REJECTED' && (<div>
                <h3>Error</h3>
                <p>{error}</p>
                </div>
            )}

        </div>
    )
}
