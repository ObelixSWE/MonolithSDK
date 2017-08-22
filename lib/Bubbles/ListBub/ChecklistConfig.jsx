/*
*  Name :   ChecklistConfig.jsx
*  Location : /imports/UI/Bubbles/ListBub
*  Author: Emanuele Crespan
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
                <h3>Checklist Name:</h3>
                <LineEdit id="title" placeholder="Insert Checklist Name" updateState={this.titleChange}/><br/>
                {this.rows}<br/>
                <PushButton buttonName="Add" handleClick={this.addOpt}/><br/>
                <PushButton buttonName="Send" handleClick={this.send}/>
            </div>

        );
    }
}
