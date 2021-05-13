import React, {useState, useEffect} from 'react'
import axios from 'axios';


const DisplayPokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    
//     useEffect(()=>{
//         retrievePokemon()
//     }, []); 

    const retrievePokemon = () => {
        console.log("retrieving")
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=809')
            .then(response=> setPokemon(response.data.results))
            .then(console.log(pokemon))
            .catch(err=> console.log(err))
        }


    return (
        <div>
            <h1>Pokemon</h1>
            <button onClick={retrievePokemon}>Get Pokemon</button>
            <ul>
            {  pokemon.length > 0 && pokemon.map( (pokemon, i) => {
                return <li key={i}>{pokemon.name}</li>
            })
            }
            </ul>
        </div>
    )
}

export default DisplayPokemon
