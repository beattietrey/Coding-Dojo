import React, { useState } from 'react'

const HookForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passConfirm, setConfirm] = useState("")
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [firstError, setFirstError] = useState("")
    const [lastError, setLastError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passError, setPassError] = useState("")
    const [confirmError, setConfirmError] = useState("")
    
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passConfirm: "",
    })

    const changeHandler = e => {
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    const handler = ev  => {
        ev.preventDefault();
        setFormSubmitted(true)
        // Ternary Operator: Less verbose if/else
        // condition ? code to execute if true : code to execute if false
    }

    const firstNameHandler = ev => {
        setFirstName(ev.target.value)
        if(ev.target.value.length > 0 && ev.target.value.length < 2) {
            setFirstError("First Name must be at least 2 characters") 
        } else {
            setFirstError("")
        }
    }
    const LastNameHandler = ev => {
        setLastName(ev.target.value)
        if(ev.target.value.length > 0 && ev.target.value.length < 2) {
            setLastError("Last Name must be at least 2 characters") 
        } else {
            setLastError("")
        }
    }      
    const emailHandler = ev => {
        setEmail(ev.target.value)
        if(ev.target.value.length > 0 && ev.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters") 
        } else {
            setEmailError("")
        }
    }    
    const passHandler = ev => {
        setPassword(ev.target.value)
        if(ev.target.value.length > 0 && ev.target.value.length < 8) {
            setPassError("Password must be at least 8 characters") 
        } else {
            setPassError("")
        }
    }
    const confirmHandler = ev => {
        setConfirm(ev.target.value)
        if(ev.target.value.length > 0 && ev.target.value !== password) {
            setConfirmError("Passwords must match") 
        } else {
            setConfirmError("")
        }
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
                        <input type="text" name="firstName" onChange={ firstNameHandler }/>
                        { firstError ? <p style={{color:'red'}}>{ firstError }</p> : ""  }
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName"onChange={ LastNameHandler }/>
                        { lastError ? <p style={{color:'red'}}>{ lastError }</p> : ""  }
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email"onChange={ emailHandler }/>
                        { emailError ? <p style={{color:'red'}}>{ emailError }</p> : ""  }
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password"onChange={ passHandler }/>
                        { passError ? <p style={{color:'red'}}>{ passError }</p> : ""  }
                    </div>
                    <div>
                        <label htmlFor="passConfirm">Password Confirmation:</label>
                        <input type="password" name="passConfirm"onChange={ confirmHandler }/>
                        { confirmError ? <p style={{color:'red'}}>{ confirmError }</p> : ""  }
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
