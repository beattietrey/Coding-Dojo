import axios from 'axios'
import React, { useState, useEffect } from 'react'

const ProductView = props => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(response => setProduct(response.data))
        .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <h1>{product.title}</h1>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.description}</h3>
        </div>
    )
}

export default ProductView
