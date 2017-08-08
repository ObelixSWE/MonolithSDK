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

export default class PollBubble extends AbsBubble {
    constructor(props){
        super(props);
        this.state={
            title:this.props.title,
            num:this.props.num,
            op:this.props.op,
            id:this.props.id
        }
        this.addVoto=this.addVoto.bind(this);
    }

    addVoto(id) {
        let i=id;
        var stateCopy=Object.assign({},this.state);
        stateCopy.op[i].voti +=1;
        this.setState(stateCopy);
        //salvataggio su DB
    }

    render(){
        let opts=[];
        for (i=0;i<this.state.num;i++){
            opts.push(
                <div>
                    <PushButton id={i} buttonName={this.state.op[i].val} handleClick={this.addVoto}/> Voti: {this.state.op[i].voti} <br/>
                </div>
            )
        }
        return(
            <VerticalLayout>
                <h1>{this.state.title}</h1>
                {opts}
            </VerticalLayout>
        );
    }
}

/*
how to use:
<PollBubble title={t} op={o} num={n}/>;
title= poll's title
op = {id:id,val:text,voti:0};
num = number of options

*/
