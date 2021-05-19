import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default () => {
    const [message,setMessage] = useState("Loading...")
    const [product,setProduct] = useState({
        title: "",
        price: 0,
        description: "",
    })
    useEffect(()=> {
        axios.get("http://localhost:8000/api")
            .then(res => {setMessage(res.data.message)})
            .catch(err => console.log(err))
    }, [])

    const submitHandler = e => {
        e.preventDefault();
    }

    const formHandler = e => {
        setProduct(...product, product[e.target.name]=[e.target.value])
        console.log(product)
    }


    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={ submitHandler }>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" onChange={ formHandler } />
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="text" name="price" onChange={ formHandler } />
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <textarea name="description" cols="30" rows="10" onChange={ formHandler }/>
                </div>
            </form>
        </div>
    )
}