import React, { useState } from 'react'

const HookForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passConfirm, setConfirm] = useState("")
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handler = ev  => {
        ev.preventDefault();
        setFormSubmitted(true)
        // Ternary Operator: Less verbose if/else
        // condition ? code to execute if true : code to execute if false
    }
    return (
        <div>
            { 
            formSubmitted ? 
            <h2> Thanks for your submission {firstName} {lastName}</h2>
            :
            <div>
                <form onSubmit={ handler }>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name="firstName" onChange={ ev => setFirstName(ev.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName"onChange={ ev => setLastName(ev.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email"onChange={ ev => setEmail(ev.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password"onChange={ ev => setPassword(ev.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="passConfirm">Password Confirmation:</label>
                        <input type="text" name="passConfirm"onChange={ ev => setConfirm(ev.target.value)}/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirmation: {passConfirm}</p>
            </div>
            }
        </div>
    )
}

export default HookForm
