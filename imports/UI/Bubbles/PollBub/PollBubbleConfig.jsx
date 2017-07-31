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
import {RadioButtonGroup} from "../../SingleComponents/RadioButtonGroup/RadioButtonGroup"
import {PushButton} from "../../SingleComponents/PushButton/PushButton";
import {VerticalLayout} from "../../Layouts/VerticalLayout";
import {LineEdit} from "../../SingleComponents/LineEdit/LineEdit"


export class PollBubbleConfig extends React.Component {
    constructor(props){
        super(props);
        this.state={ num: 0, op:[],title:''}
        this.addOpt=this.addOpt.bind(this);
        this.titleChange=this.titleChange.bind(this);
        this.optChange=this.optChange.bind(this);
    }

    addOpt(event){
        let n=this.state.num+1;
        this.setState({num:n});
        console.log(this.state.op.length);
    }

    titleChange(text,id){
        this.state.title=text;
    }

    optChange(text,id) {
        this.state.op[id-1]={id:id,val:text,voti:0};
    }

    render() {
        var rows = [];
        var n=this.state.num+1;
        for (var i=1; i < n; i++) {
            rows.push(<div>
                Opzione {i}:<br/>
                <LineEdit id={i} placeholder="Inserisci un opzione" updateState={this.optChange}/>
                /*<input type="text" id={i} placeholder="Inserisci un opzione" onChange={this.optChange.bind(this)}/>*/
            </div>);
        }
        return (
            <VericalLayout>
                <h1>Domanda:</h1><br/>
                <LineEdit id="question" placeholder="Inserisci una domanda" updateState={this.titleChange}/><br/>
                /*<input type="text" placeholder="Inserisci una domanda" onChange={this.titleChange.bind(this)}/>*/
                {rows}<br/>
                <PushButton buttonName="Add" handleClick={this.addOpt}/><br/>
                <PushButton buttonName="Send" handleClick={}/><br/>
                /*<button className="styles.pulsante pulsante1" onClick={this.addOpt.bind(this)}>Aggiungi opzione..</button>
                <button type="submit" className="button" onClick={this.inserisci.bind(this)}>Invia</button><br/>*/
            </VericalLayout>

        );
    }

}