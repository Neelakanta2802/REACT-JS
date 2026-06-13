import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DisplayImageInUI() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  async function getImages() {
    try {
      const res = await axios.get('https://api.escuelajs.co/api/v1/products');
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
      setError('failed to fetchImages');
    }
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <div>
        {data.map((prod) => (
          <div key={prod.id}>
            <img
              src={prod.images ? prod.images[0] : prod.img}
              width={200}
              alt={prod.title}
            />
            <p>{prod.title}</p>
          </div>
        ))}
        {error && <p>{error}</p>}
      </div>
    </>
  );
}
