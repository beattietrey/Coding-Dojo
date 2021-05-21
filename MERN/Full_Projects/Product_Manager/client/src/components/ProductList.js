import React from 'react'
import { Link } from '@reach/router';

const ProductList = props => {
    const { onDelete } = props;

    return (
        <div>
            {
                props.products.map((product,i)=> {
                    return <p key={i}> 
                    <Link to={`/products/${product._id}`}>{product.title}</Link> :{product.description}; ${product.price} 
                    <button onClick={onDelete(product._id)}>Delete</button> </p>
                })
            }
        </div>
    )
}

export default ProductList
