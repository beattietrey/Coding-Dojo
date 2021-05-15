import { Link, navigate } from '@reach/router'
import React, {useState} from 'react'

const Navbar = () => {

    const dropdown = ["Person","Planet","Spaceship","Vehicle","Film","Species"] 
    const [id,setId] = useState()
    const [selector, setSelector] = useState("")

    const Select = e => {
        setSelector(e.target.value)
        console.log("selector: ",selector)
        console.log("id: ",id)
    }
    const formHandler = e => {
        e.preventDefault();
        navigate(`/${selector}/${id}`)
    }

    return (
        <div>
            <h1>Search your feelings, you know it to be true.</h1>
            <form onSubmit={formHandler}>
            <label>Search for: </label>
            <select value={selector} onChange={Select}>
                <option defaultValue="">-select-</option>
                {
                    dropdown.map( (search, i) => <option key= { i } value={dropdown[i]}>{ search }</option> 
                    
                )}
            </select>
            <label htmlFor="id">Id:</label>
            <input type="number" name="id" onChange={e => setId(e.target.value)}/>
            <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Navbar
