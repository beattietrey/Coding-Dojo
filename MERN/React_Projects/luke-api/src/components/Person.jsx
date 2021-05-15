import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Person = props => {
    const[person, setPerson]=useState({})
    const[homeworld, setHomeworld]=useState({})
    const[films, setFilms]=useState([])
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${props.id}`)
        .then(response => console.log(response.data))
        .then(response => setPerson(response.data))
        .catch(err => console.log(err))
        axios.get(person.homeworld)
        .then(response => setHomeworld(response.data))
        .catch (err => console.log(err))
        let arr = []
        for (let film = 0; film<person.films;film++) {
            axios.get(film)
            .then(response => arr.push(response.data))
            .then(() => setFilms(arr))
            .catch(err => console.log(err))
        }
    })


    return (
        <div>
            <h2>Name: {person.name}</h2>
            <h2>Birth Year: {person.birth_year}</h2>
            <h2>Homeworld: <Link to={`/planet/${homeworld.id}`}> {homeworld.name}</Link></h2>
            <h2>Films: { films.map( (film, i) => <span><Link to ={`/films/${film.id}`} key={i}>{film.title}</Link></span>)}</h2>
        </div>
    )
}

export default Person
