import React, { Component } from 'react';

import bulbasaur from '../../icons/bulbasaur.png';
import charizard from '../../icons/charizard.png';

import './Title.css';

class Title extends Component{

    render(){
        return (
           <div className="titleContainer" >
               <h1 className="imageContainer" >
                   <img className="leftImage" src={bulbasaur} alt="bulbasaur" height="50px/"  />
                    Pokedex
                   <img className="rightImage" src={charizard} alt="charizard" height="50px/" />
               </h1>
           </div>
        );
    }
}

export default Title;