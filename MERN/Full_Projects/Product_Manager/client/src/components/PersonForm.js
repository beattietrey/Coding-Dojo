import React, { useState} from 'react';
import axios from 'axios';

export default () => {
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState(0)
    const [description,setDescription] = useState("")

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product", {
            title,
            price, 
            description,
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h2>Product Manager</h2>
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
    )
}