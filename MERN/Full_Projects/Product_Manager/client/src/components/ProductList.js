import React from 'react'
import { Link } from '@reach/router';
import axios from 'axios';

const ProductList = props => {
    const { removeFromDom } = props;
    const deleteProduct = productId => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res => {
            console.log(res)
            removeFromDom(productId)
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            {
                props.products.map((product,i)=> {
                    return <p key={i}> 
                    <Link to={`/products/${product._id}`}>{product.title}</Link> :{product.description}; ${product.price} 
                    <button onClick={e => deleteProduct(product._id)}>Delete</button> </p>
                })
            }
        </div>
    )
}

export default ProductList
