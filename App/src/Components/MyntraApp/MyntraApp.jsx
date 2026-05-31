import React, { useState } from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import CategoryButtons from '../CategoryButtons/CategoryButtons';
import ProductGrid from '../ProductGrid/ProductGrid';



export default function MyntraApp() {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    const[activeCategory,setActiveCategory] = useState("men");

    //URL Mapping Object
    const URLS = {
        men  : "https://fakestoreapi.com/products/category/men'sClothing",
        women: "https://fakestoreapi.com/products/category/women'sClothing", 
        kids :"https://fakestoreapi.com/products/category/jewelery",
        genz : "https://fakestoreapi.com/products/category/electronics"
    }
    // Main Function ,CORE LOGIC
    const fetchProducts = async(category) => {
        setLoading(true); //start Loading
        setError(""); //clear old Error
        setActiveCategory(category); // update active button

        try{
            const res = await axios.get(URLS[category]); // API CAll
            // axios automatically gives data
            console.log(res.data);
            setProducts(res.data);//stores data
        }
        catch(err){
            setError(err.message);//store error
        }
        finally{
            setLoading(false);//stops loading Always
        }

    };
    // useEffect Intial Load runs Only Once
    useEffect (()=> {
      fetchProducts("men");//default changes
    }, []);


  return (
    <div style = {{padding:"20px"}} >
        <h1 style={{color:"pink"}}>MYNTRA</h1>
      {/*Buttons */}
      <CategoryButtons
      active={activeCategory}
      onSelect={fetchProducts}
      />
      {/*UI States */}
      {loading && <p style={{color:"red"}}>{error}</p>}
      {!loading && !error && (
        <productGrid products={products}/>
        
      )}    
      </div>
  );
}
