/*
*  Name :   BubbleConfig.jsx
*  Location : /impor../../UI/Bubbles
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
import VerticalLayout from "../../ui/Layouts/VerticalLayout";
import ComboBox from "../../ui/SingleComponents/ComboBox/ComboBox";
import LineEditPushButton from "../../ui/SingleComponents/LineEditPushButton/LineEditPushButton";
import AbsBubbleConfig from "../../uiConstruction/AbsBubbleConfig";

export default class CurrencyBubbleConfig extends AbsBubbleConfig{
    constructor(props){
        super(props);
        this.state={
            curr_in:this.props.curr[0],
            curr_out:this.props.curr[0],
            value:0
        }
        this.getValue=this.getValue.bind(this);
        this.getCurrIn=this.getCurrIn.bind(this);
        this.getCurrOut=this.getCurrOut.bind(this);
    }

    getCurrOut(text){
        this.setState({curr_out:text})
    }

    getCurrIn(text){
        this.setState({curr_in:text})
    }

    getValue(text){
        this.setState({value:text});
        this.props.send(text,this.state.curr_in,this.state.curr_out);
    }

    render(){

      return(
            <VerticalLayout>
                <h1>Scegli la valuta base</h1><ComboBox options={this.props.curr} getSelection={this.getCurrIn}/><br/>
                <h1>Scegli la valuta finale</h1><ComboBox options={this.props.curr} getSelection={this.getCurrOut}/><br/>
                <h1>Inserisci il valore:</h1><LineEditPushButton buttonName="Send" getText={this.getValue}/>
            </VerticalLayout>
        );
    }
}
