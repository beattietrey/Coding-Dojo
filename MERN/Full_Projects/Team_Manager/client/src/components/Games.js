import axios from 'axios'
import React from 'react'
import buttonNav from './buttonNav'

const Games = props => {
    const { players } = props
    const gameNumber = props.number

    const playerStatus = (player,status) => {
        let updatedPlayer = {...player}
        updatedPlayer.games[props.number] = status
        console.log(player)
        axios.put(`http://localhost:8000/api/players/${player._id}`, updatedPlayer)
                .then(res => console.log(res))
                .catch(err => console.log(err))
    }
    return (
        <div>
            <div>
                <button onClick={() => buttonNav('/games/1')}>Game 1</button> | <button onClick={() => buttonNav('/games/2')}>Game 2</button> | <button onClick={() => buttonNav('/games/3')}>Game 3</button>
            </div>
            <div>
                <table style= {{margin: 'auto'}} >
                    <th>
                        <tr>Player Name</tr>
                        <tr>Actions</tr>
                    </th>
                    <tbody>
                        {
                            players.map((player,key) => {
                                return <tr key={key}>
                                    <td>{player.name}</td>
                                    <td>
                                        <button style={player.games[gameNumber] === "Playing" ? {backgroundColor:"green"}: {}} onClick={() => playerStatus(player,"Playing")}>Playing</button> | 
                                        <button style={player.games[gameNumber] === "Not Playing" ? {backgroundColor:"red"}: {}}onClick={() => playerStatus(player,"Not Playing")}>Not Playing</button> | 
                                        <button style={player.games[gameNumber] === "Undecided" ? {backgroundColor:"yellow"}: {}}onClick={() => playerStatus(player,"Undecided")}>Undecided</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Games
