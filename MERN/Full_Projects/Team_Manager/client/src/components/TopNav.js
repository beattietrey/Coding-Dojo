import React from 'react'
import buttonNav from './buttonNav'

const TopNav = props => {
    return (
        <div>
            <button onClick={() => buttonNav('/players/list')}> Manage Players</button> | <button onClick={() => buttonNav('/games/1')}>Manage Player Status</button>
        </div>
    )
}

export default TopNav
