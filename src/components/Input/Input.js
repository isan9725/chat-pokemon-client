import React, { Component } from 'react';

import './Input.css';

class Input extends Component{

    render(){
        return (
            <form className="form" >
                <input
                className="input"
                type="text"
                placeholder="Type a question... "
                value={this.props.message}
                onChange={(event) => this.props.setMessage(event.target.value)}
                onKeyPress={event => event.key === 'ENTER' ?  this.props.sendMessage(event) : null}
                />
                <button className="sendButton" onClick={(event) => this.props.sendMessage(event)} >Send</button>
            </form>
        );
    }
}

export default Input;