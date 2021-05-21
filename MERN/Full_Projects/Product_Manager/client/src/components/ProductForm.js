import React, { useState} from 'react';

export default props => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props
    const [title,setTitle] = useState(initialTitle)
    const [price,setPrice] = useState(initialPrice)
    const [description,setDescription] = useState(initialDescription)

    const submitHandler = e => {
        e.preventDefault();
        onSubmitProp({title,price,description})
    }


    return (
        <div>
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