import React, { Component } from 'react';
import io from 'socket.io-client';

import './Chat.css';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

class Chat extends Component{
    constructor(){
        super();
        this.state={
            messages:[],
            message : '',
            name: 'You'
        }

    }

    componentDidMount(){
        const ENDPOINT = 'https://react-app-chat-pokemon.herokuapp.com/';

        socket = io(ENDPOINT);

        socket.emit('join');

        socket.on('join', message =>{
            this.setState({
                messages: [...this.state.messages, message]
            });
        });

        socket.on('message', (message) =>{
            this.setState({
                messages: [...this.state.messages, message]
            })
        })
    }

    componentWillUnmount(){
        socket.emit('disconnect');
        socket.off();
    }

    sendMessage = event =>{
        event.preventDefault();
        const msg = this.state.message;

        if(msg){
            const newmessage = {user: this.state.name, text: msg};
            socket.emit('sendMessage', msg, () => {
                this.setState({
                    messages: [...this.state.messages, newmessage],
                    message:''
                });
            })
        }
    }

    changeChatState = (message) =>{
        this.setState({
            message : message
        })
    }

    render(){
        return(
            <div className="outerContainer" >
                <div className="container" >
                    <InfoBar/>
                    <Messages messages={this.state.messages} name={this.state.name} />
                    <Input message={this.state.message} setMessage={this.changeChatState} sendMessage={this.sendMessage} />
                </div>
            </div>
        );
    }

}

export default Chat;