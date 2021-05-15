import React from 'react'

export default class Keypad extends React.Component {

    handleKeyPress = (event) => console.log('Entering password...')

    render() {
        return(
            <input onKeyUp={this.handleKeyPress} type="password" />
        )
    }
}