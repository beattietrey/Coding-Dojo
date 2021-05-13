import React from 'react'

const NotHomePage = props => {


    return (
        <div>{
            isNaN(props.id) ? <h1 style={{color:props.text, backgroundColor:props.background}}>The word is: {props.id}</h1> : <h1>The number is: {props.id} </h1>
        }
        </div>
    )
}

export default NotHomePage
