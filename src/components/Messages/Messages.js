import React, { Component } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../Message/Message'

import './Messages.css';

class Messages extends Component{

    render(){

        const {messages,  name} = this.props;

        return (
            <ScrollToBottom className="messages" >
                {messages.map((message, i) => <div key={i} ><Message message={message} name={name} /></div>)}
            </ScrollToBottom>
        );
    }
}

export default Messages;