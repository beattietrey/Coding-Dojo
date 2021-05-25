import { navigate } from '@reach/router';
import axios from 'axios'
import React, { useState } from 'react'
import AddNav from './AddNav'

const Form = props => {
    const [error, setError] = useState("")
    const[player, setPlayer] = useState({
        name: "",
        position: "",
        games: {}
    })

    const changeHandler = e => {
        setPlayer({...player, [e.target.name]:e.target.value})
        if(e.target.name === "name" && e.target.value.length > 1) {
            setError("")
        } else if (e.target.name === "position" && player.name.length > 1) {
            setError("")
        } else {
            setError("Name must be at least 2 characters")
        }
    }

    const createPlayer = player => {
        axios.post('http://localhost:8000/api/players', player)
        .then(res => {
            console.log(res)
            // setPlayers({...players.push(player)})
        })
        .catch(err => console.log(err))
    }
    const submitHandler = e => {
        e.preventDefault()
        if(player.name.length > 1){
            setError("")
            player.games = {1: "Undecided", 2: "Undecided", 3: "Undecided"}
            createPlayer(player)
            navigate('/players/list')
        } else {
            setError("Name must be at least 2 characters")
        }
    }

    return (
        <div>
            <AddNav/>
            <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Player Name:</label>
                <input type="text" name="name" onChange={e => changeHandler(e)} value={player.name}/>
                <p style={{color:"red"}}>{error}</p>
            </div>
            <div>
                <label htmlFor="preferred">Preferred Position:</label>
                <input type="text" name="position" onChange={e => changeHandler(e)} value={player.position}/>
            </div>
            <input type="submit" {...player.name.length < 2 ? "disabled" : ""} value="Add"/>
            </form>
        </div>
    )
}

export default Form
