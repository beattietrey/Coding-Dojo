import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductForm from './ProductForm';
import {navigate} from '@reach/router'


const Update = props => {
    const { id } = props;
    const [product, setProduct] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${ id }`)
        .then(response => {
            setProduct(response.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    }, [])
        
    // const submitHandler = e => {
    //     e.preventDefault();
    //     axios.put(`http://localhost:8000/api/products/${id}`, {
    //         title,
    //         price,
    //         description,
    //     })
    //         .then(res => {
    //             console.log(res)
    //             navigate(`/products/${id}`)
    //         })
    //         .catch(err => console.log(err))
    // }

    const updateProduct = product => {
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
            loaded
            ?
            <div>
                <h3>{product.title}</h3>
                <ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} />
                <button onClick={() => navigate(`/products/${id}`)}>Back</button>
            </div>
            :
            <p>Loading....</p>
            }
        </div>
    )
}

export default Update
