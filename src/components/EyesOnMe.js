import React from 'react'

export default class EyesOnMe extends React.Component {

    handleFocus = (event) => console.log('Good!');
    handleBlur = (event) => console.log('Hey! Eyes on me!')

    render() {
        return(
            <button onFocus={this.handleFocus} onBlur={this.handleBlur} />
        )
    }
}