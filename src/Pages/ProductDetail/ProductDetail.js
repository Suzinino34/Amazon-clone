import React, { useState, useEffect } from 'react'; 
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';

function ProductDetail() {
  const [product, setProduct] = useState({}); 
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams(); 


  useEffect(() => { 
    setIsLoading(true);
    axios.get(`${productUrl}/products/${productId}`) 
      .then((res) => {
        console.log("Fetched product: ", res.data); // Log the fetched product data
        setProduct(res.data);
        setIsLoading(false);
      }).catch((err) => {
        console.log("Error fetching product: ", err); // Log any errors
        setIsLoading(false);
      });
}, [productId]);


  return (
    <LayOut>
      {isLoading ? (<Loader />) : (<ProductCard 
      product={product}
      flex ={true}
      renderDesc={true}
      renderAdd={true}
      />)}
    </LayOut>
  );
}

export default ProductDetail;

