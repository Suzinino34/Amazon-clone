// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from '../Product/ProductCard'; 
// import classes from '../Product/Product.module.css'
// import Loader from '../Loader/Loader';
// function Product() {
//     const [products, setProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     useEffect(() => {
//         axios.get('https://fakestoreapi.com/products')
//             .then((res) => {
//                 setProducts(res.data);
//                 isLoading(false)
//             })
//             .catch(error => {
//                 console.error("Error fetching data: ", error);
//                 isLoading(false)
//             });
//     }, []);

//     return (

//         <>
//         {
//             isLoading?(<Loader/>) : (<section className={classes.products_container}>
//             {products.length > 0 ? (
//                 products.map((singleProduct) => (
//                     <ProductCard product={singleProduct} key={singleProduct.id} />
//                 ))
//             ) : (
//                 <p>Loading products...</p>
//             )}
//         </section>)
//         }
        
//         </>
        
//     );
// }

// export default Product;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../Product/ProductCard'; 
import classes from '../Product/Product.module.css';
import Loader from '../Loader/Loader';

function Product() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Initialize as true since we're loading data

    useEffect(() => {
        // Start loading
        setIsLoading(true); // Use setIsLoading to update the state
        
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data);
                setIsLoading(false); // Stop loading after data is fetched
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setIsLoading(false); // Stop loading in case of error
            });
    }, []);

    return (
        <>
        {
            isLoading ? (
                <Loader />
            ) : (
                <section className={classes.products_container}>
                    {products.length > 0 ? (
                        products.map((singleProduct) => (
                            <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
                        ))
                    ) : (
                        <p>No products found.</p> // Better to show a message when no products are found
                    )}
                </section>
            )
        }
        </>
    );
}

export default Product;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from '../Product/ProductCard'; 
// import classes from '../Product/Product.module.css';
// import Loader from '../Loader/Loader';

// function Product() {
//     const [products, setProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null); // State to store error messages

//     useEffect(() => {
//                 axios.get('https://fakestoreapi.com/products')
//                     .then((res) => {
//                         setProducts(res.data);
//                         isLoading(false)
//                     })
//                     .catch(error => {
//                         console.error("Error fetching data: ", error);
//                         isLoading(false)
//                     });
//             }, []);

//     return (
//         <>
//         {isLoading ? (
//             <Loader />
//         ) : error ? (
//             <p className={classes.error}>{error}</p> // Display error message if there's an error
//         ) : (
//             <section className={classes.products_container}>
//                 {products.length > 0 ? (
//                     products.map((singleProduct) => (
//                         <ProductCard product={singleProduct} key={singleProduct.id} />
//                     ))
//                 ) : (
//                     <p>No products found.</p>
//                 )}
//             </section>
//         )}
//         </>
//     );
// }

// export default Product;
