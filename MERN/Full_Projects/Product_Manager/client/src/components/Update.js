import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router';

const Update = props => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${ id }`)
        .then(response => {
            setTitle(response.data.title);
            setPrice(response.data.price);
            setDescription(response.data.description);
            setLoaded(true)
        })
        .catch(err => console.log(err))
    }, [])
        
    const submitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description,
        })
            .then(res => {
                console.log(res)
                navigate(`/products/${id}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
            loaded
            ? <div>
                <h3>Update { title }</h3>
                <form onSubmit={ submitHandler }>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" onChange={e => setTitle(e.target.value)} value={title}/>
                    </div>
                    <div>
                        <label htmlFor="price">Price: </label>
                        <input type="text" name="price" onChange={e => setPrice(e.target.value)} value ={price}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <textarea name="description" cols="30" rows="10" onChange={e => setDescription(e.target.value)} value={description}/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            :
            <p>Loading....</p>
            }
        </div>
    )
}

export default Update
