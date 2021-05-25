import axios from 'axios'
import React from 'react'
import AddNav from './AddNav'

const PlayerList = props => {

    const deletePlayer = player => {

            axios.delete(`http://localhost:8000/api/player/${player._id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    return (
        <div>
            <AddNav/>
            <h1>You are on the list page</h1>
            <table style= {{margin: 'auto'}} >
                <tr>
                    <th>Player Name</th>
                    <th>Preferred Position</th>
                    <th>Delete</th>
                </tr>
            <tbody>
            {
                props.players.map((player, i) => {
                    return <tr key={i}>
                            <td>{ player.name }</td>
                            <td>{ player.position }</td>
                            <td><button onClick={() => window.confirm(`Are you sure you want to delete ${player.name}`) ? deletePlayer(player): ""}>Delete</button></td>
                        </tr>
                        })
            }
            </tbody>
            </table>
        </div>
    )
}

export default PlayerList
