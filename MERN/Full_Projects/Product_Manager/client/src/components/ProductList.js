import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const ProductList = props => {
    return (
        <div>
            {
                props.products.map((product,i)=> {
                    return <p key={i}> <Link to={`/products/${product._id}`}>{product.title}</Link> :{product.description}; ${product.price}</p>
                })
            }
        </div>
    )
}

export default ProductList
