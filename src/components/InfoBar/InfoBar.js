import React, { Component } from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './InfoBar.css';

class InfoBar extends Component{

    render(){
        return (
            <div className="infoBar" >
                <div className="leftInnerContainer" >
                    <img className="onlineIcon" src={onlineIcon} alt="Online" />
                </div>
            </div>
        );
    }
}

export default InfoBar;