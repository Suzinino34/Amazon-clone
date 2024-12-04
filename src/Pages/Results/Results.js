import React, { useState, useEffect } from 'react';
import classes from '../Results/Results.module.css';
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import ProductCard from '../../Components/Product/ProductCard';

function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${productUrl}/products/category/${categoryName}`);
        setResults(res.data);
      } catch (err) {
        console.log(err);
        setError('Failed to fetch products.'); 
      }
    };

    fetchProducts();
  }, [categoryName]); 

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if exists */}
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              renderDesc={false}
              renderAdd={true}
            />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
