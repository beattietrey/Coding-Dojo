import { navigate } from '@reach/router'

const buttonNav = buttonValue => {
    console.log(buttonValue)
    navigate(`${buttonValue}`)
}

export default buttonNav