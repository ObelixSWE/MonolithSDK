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
import AbsBubble from "../../../lib/uiConstruction/AbsBubble";


export class TranslationBubble extends AbsBubble{
    constructor(props){
        super(props);
        this.state={
            lang_in:this.props.lang_in,
            lang_out:this.props.lang_out,
            words_in:this.props.words_in,
            words_out:this.props.words_out
        }
    }


    render(){
        return(
            <VerticalLayout>
                <p><h1>Da:</h1>{this.state.lang_in} <h1>a:</h1>{this.state.lang_out}</p><br/>
                <p>{this.state.words_in} <h1>-></h1> {this.state.words_out}</p>
            </VerticalLayout>
        );
    }
}