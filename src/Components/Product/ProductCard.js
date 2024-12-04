// import React from 'react';
// import Rating from '@mui/material/Rating';
// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
// import classes from '../Product/Product.module.css';
// import { Link } from 'react-router-dom';
// import { DataContext } from '../DataProvider/DataProvider';
// import { Type } from '../../Utility/Action.type';

// function ProductCard({ product,flex,renderDesc}) {
//     const { image, title, id, price,description,rating } = product; 

//     const [state, dispatch] = useContext(DataContext);

    
//     const addToCart = ()=>{
//         dispatch({
//             type:Type.ADD_TO_BASKET,
//             item:{
//                 image, title, id, price,description,rating
//             }
//         })
//     }
//     return (
//         <div className={`${classes.card_container} ${flex?classes.product_flexed : ''}`}>
//             <Link to={`/products/${id}`}>
//             <img src={image} alt={title} className={classes.img_container} />


//             </Link>
//             <div>
//                 <h3>{title}</h3>
//                 {renderDesc && <div style={{maxWidth:'750px'}}>{description}</div>}
//                 <div className={classes.rating}>
//                     {/* Rating */}
//                     <Rating value={rating?.rate} precision={0.1} />
//                     {/* Count of ratings */}
//                     <small>{rating?.count}</small>
//                 </div>
//                 <div>
//                     {/* Price */}
//                     <CurrencyFormat amount={price} />
//                 </div>

//                 <button className={classes.button}>
//                     Add to cart
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default ProductCard;

import React, { useContext } from 'react'; // Import useContext here
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from '../Product/Product.module.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/Action.type';

function ProductCard({ product, flex, renderDesc,renderAdd }) {
    const { image, title, id, price, description, rating } = product;

    const [state, dispatch] = useContext(DataContext);

    const addToCart = () => {
        dispatch({
            type: Type.ADD_TO_BASKET,
            item: {
                image, title, id, price, description, rating
            }
        });
    };

    return (
        <div className={`${classes.card_container} ${flex ? classes.product_flexed : ''}`}>
            <Link to={`/products/${id}`}>
                <img src={image} alt={title} className={classes.img_container} />
            </Link>
            <div>
                <h3>{title}</h3>
                {renderDesc && <div style={{ maxWidth: '750px' }}>{description}</div>}
                <div className={classes.rating}>
                    {/* Rating */}
                    <Rating value={rating?.rate} precision={0.1} />
                    {/* Count of ratings */}
                    <small>{rating?.count}</small>
                </div>
                <div>
                    {/* Price */}
                    <CurrencyFormat amount={price} />
                </div>
                {
                    renderAdd && <button className={classes.button} onClick={addToCart}>
                    Add to cart
                </button>
                }
                
            </div>
        </div>
    );
}

export default ProductCard;
