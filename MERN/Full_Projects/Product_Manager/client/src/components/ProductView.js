import React, { useState, useEffect } from 'react'
import { Link, navigate, redirectTo } from '@reach/router'
import axios from 'axios'

const ProductView = props => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(response => setProduct(response.data))
        .catch(err => console.log(err))
    }, [])

    const deleteProduct = productId => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(() => {
            console.log("This is working")
            navigate('/products')})
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Item: {product.title}</h1>
            <h4>Price: {product.price}</h4>
            <h4>Description: {product.description}</h4>
            <button onClick={() => deleteProduct(product._id)}> Delete </button>
            <Link to={`/products/${product._id}/edit`}> Edit </Link> 
            <button onClick={() => navigate('/products')}>Home</button>

        </div>
    )
}

export default ProductView
