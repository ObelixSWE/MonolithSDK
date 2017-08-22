/*
*  Name :   ListBubble.jsx
*  Location : /imports/UI/Bubbles
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: {class ListBubble}
*/

import React, { Component } from 'react'
import VerticalLayout from "../../ui/Layouts/VerticalLayout";
import CheckBoxList from "../../ui/SingleComponents/CheckBoxList/CheckBoxList";
import AbsBubble from "../../../lib/uiConstruction/AbsBubble";


export default class ListBubble extends AbsBubble{
    constructor(props){
        super(props);
        this.state=this.props.stat;
        this.changeCheck=this.changeCheck.bind(this);
    }

    changeCheck(m){
        this.props.getCheck(m);
    }

    render(){
        return(
            <VerticalLayout>
                <h1>{this.state.title}</h1>
                <CheckBoxList options={this.props.stat.op} getCheck={this.changeCheck}/>
            </VerticalLayout>
        );
    }
}
