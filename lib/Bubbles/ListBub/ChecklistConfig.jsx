/*
*  Name :   ChecklistConfig.jsx
*  Location : /imports/UI/Bubbles
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: {class ChecklistConfig}
*/

import React, { Component } from 'react';
import LineEdit from '../../ui/SingleComponents/LineEdit/LineEdit.jsx';
import PushButton from '../../ui/SingleComponents/PushButton/PushButton.jsx';
import VerticalLayout from '../../ui/Layouts/VerticalLayout.jsx';
import AbsList from './AbsList.jsx';


export default class ChecklistConfig extends AbsList {
    constructor(props){
        super(props);
        this.send=this.send.bind(this);
    }

    send(){
    }

    render() {
        return (
            <div>
                <h3>Nome lista:</h3>
                <LineEdit id="title" placeholder="Inserisci una nome per la lista" updateState={this.titleChange}/><br/>
                {this.rows}<br/>
                <PushButton buttonName="Add" handleClick={this.addOpt}/><br/>
                <PushButton buttonName="Send" handleClick={this.send}/>
            </div>

        );
    }
}
