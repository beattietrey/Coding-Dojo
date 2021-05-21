import axios from 'axios';
import React, { useEffect, useState }from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res=> {
                setProducts(res.data)
                setLoaded(true)
            });

    },[])

    const removeFromDom = productId => setProducts(products.filter(product => product._id !== productId))
    
    const deleteProduct = productId => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res => {
            console.log(res)
            removeFromDom(productId)
        })
        .catch(err => console.log(err))
    }
    const createProduct = product => {
        axios.post(`http://localhost:8000/api/products`, product)
            .then(res => setProducts([...products, res.data]))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle='' initialPrice={0} initialDescription=''/>
            <hr/>
            {loaded && <ProductList products={products} onDelete={deleteProduct}/>}
        </div>
    )
}