/*
*  Name :   Bubble.jsx
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
import VerticalLayout from "../../Layouts/VerticalLayout";
import PushButton from "../../SingleComponents/PushButton/PushButton";
import AbsBubble from "../../../lib/uiConstruction/AbsBubble";

export default class WeathBubble extends AbsBubble {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <VerticalLayout>
                <h2>{this.props.city}</h2>
            </VerticalLayout>
        );
    }
}
