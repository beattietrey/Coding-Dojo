import React from 'react'
import buttonNav from './buttonNav'

const AddNav = props => {
    return (
        <div>
            <button onClick={() => buttonNav('/players/list')}>List</button> | <button onClick={() => buttonNav('/players/addplayer')}>Add Player</button>
        </div>
    )
}

export default AddNav
