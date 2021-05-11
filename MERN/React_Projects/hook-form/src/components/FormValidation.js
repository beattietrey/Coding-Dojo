import React, { useReducer } from 'react';

// function nameRequirement(target) {
//     if (target.length < 2 && target.length > 0) {
//         return false;
//     } else {
//         return true;
//     }
// }

// function validateEmail(mail) 
// {
//  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
//   {
//     return (true)
//   }
//     return (false)
// }

const initialState = {
        firstName: {
            value: '',
            error: null,
            // requirement: nameRequirement(state.firstName.value),
            falseError: "First Name must be at least 2 characters"
        },
        lastName: {
            value: '',
            error: null,
            // requirement: nameRequirement(state.lastName.value),
            falseError: "Last Name must be at least 2 characters"
        },
        email: {
            value: '',
            error: null,
            // requirement: validateEmail(state.email.value)
        }
    };

function reducer(state, action) {
    return {
        ...state,
        [action.type]:action.payload
    };
}


export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const {name, value, error, requirement, falseError } = e.target;
        dispatch({
            type:name, payload: value,
        });
        // if(requirement !== true) {
        //     dispatch ({
        //         type:error, payload:falseError,
        //     })
        // }
    }


    return (
        <div>
            {JSON.stringify(state)}
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        name="firstName"
                        value={state.firstName.value}
                        onChange={handleChange}
                    />
                        {state.firstName.error !== null && (
                            <p className="error">{state.firstName.error}</p>
                        )}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        name="lastName"
                        value={state.lastName.value}
                        onChange={handleChange}
                    />
                        {state.firstName.error !== null && (
                            <p className="error">{state.firstName.error}</p>
                        )}
                </div>            
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                    />
                        {state.firstName.error !== null && (
                            <p className="error">{state.firstName.error}</p>
                        )}
                </div> 
                <input type="submit" value="Submit" />
        </div>
    );
}