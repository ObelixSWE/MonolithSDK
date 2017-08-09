/*
*  Name :   BubbleConfig.jsx
*  Location : /imports/UI/Bubbles
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {Breve descrizione del file}
*  ----------------------------------------------
*  History :
*  Version: {Versione del file}
*  Update data: {Data ultima modifica}
*  Description: {descrizione della modifica}
*  Author: {Autore della modifica}
*/

import React, { Component } from 'react'
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'
import RadioButtonGroup from "../../SingleComponents/RadioButtonGroup/RadioButtonGroup"
import PushButton from "../../SingleComponents/PushButton/PushButton";
import VerticalLayout from "../../Layouts/VerticalLayout";
import LineEdit from "../../SingleComponents/LineEdit/LineEdit"
import LineEditPushButton from "../../SingleComponents/LineEditPushButton/LineEditPushButton";
import AbsBubbleConfig from "../../../lib/uiConstruction/AbsBubbleConfig";


export default class WeathBubbleConfig extends AbsBubbleConfig{
    constructor(props){
        super(props);
        this.getCity=this.getCity.bind(this);
    }

    getCity(text){
        this.props.getCity(text);
    }

    render(){
        return(
            <VerticalLayout>
                <h1>Inserisci la città</h1>
                <LineEditPushButton buttonName="Send" getText={this.getCity}/>
            </VerticalLayout>
        );
    }
}
