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
import CheckBoxList from "../../SingleComponents/CheckBoxList/CheckBoxList";
import AbsBubble from "../../../lib/uiConstruction/AbsBubble";


export default class ListBubble extends AbsBubble{
    constructor(props){
        super(props);
        this.state=this.props.stat;
        this.changeCheck=this.changeCheck.bind(this);
    }

    changeCheck(m){
      console.log(m);
        //this.props.getCheck(m);
    }

    render(){

        return(
            <VerticalLayout>
                <h1>{this.state.title}</h1>
                <CheckBoxList classes="chel casso che vojo" options={this.props.stat.op} getCheck={this.changeCheck}/>
            </VerticalLayout>
        );
    }

}

//options={[{"nome",true/false},{"nome",true/false},...]}
