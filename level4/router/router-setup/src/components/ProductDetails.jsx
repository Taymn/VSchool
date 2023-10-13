import React from 'react';
import { useParams } from 'react-router-dom'; //params 1
import productData from './productData'; //params 3

export default function ProductDetails() {// had props in param
   const {productId} = useParams()//params 2
   //.getRequest
   const foundProduct = productData.find(product => product._id === productId)//params 4

    return ( 
        <div>
            <h1>Product Detail Page</h1> {/*params 5*/}
            <h2>{foundProduct.name} - ${foundProduct.price}</h2> {/*params 5*/}
            <p>{foundProduct.description}</p> {/*params 5*/}
        </div>
     );
}

