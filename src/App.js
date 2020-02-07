import React, {Component} from 'react';

import Chat from './components/Chat/Chat';
import Title from './components/Title/Title';

class App extends Component{
    render(){
        return (
            <div>
                <Title/>
                <Chat/>
            </div>
        )
    }

}

export default App;