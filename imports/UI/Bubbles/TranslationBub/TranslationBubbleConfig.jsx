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
import VerticalLayout from "../../Layouts/VerticalLayout";
import ComboBox from "../../SingleComponents/ComboBox/ComboBox";
import LineEditPushButton from "../../SingleComponents/LineEditPushButton/LineEditPushButton";
import AbsBubbleConfig from "../../../lib/uiConstruction/AbsBubbleConfig";

export default class TranslationBubbleConfig extends AbsBubbleConfig{
    constructor(props){
        super(props);
        this.state={
            lang_in:'',
            lang_out:'',
            words:''
        }
        this.getLangIn=this.getLangIn.bind(this);
        this.getLangOut=this.getLangOut.bind(this);
        this.getText=this.getText.bind(this);
    }

    getLangIn(text){
        this.setState({lang_in:text});
    }

    getLangOut(text){
        this.setState({lang_out:text});
    }

    getText(text){
        this.setState({words:text});
        //invio bolla
    }

    render(){
        return(
            <VerticalLayout>
                <h1>Scegli la lingua base</h1><ComboBox options="" getSelection={this.getLangIn}/><br/>
                <h1>Scegli la lingua finale</h1><ComboBox options="" getSelection={this.getLangOut}/><br/>
                <h1>Inserisci la frase:</h1><LineEditPushButton buttonName="Send" getText={this.getText}/>
            </VerticalLayout>
        );
    }
}