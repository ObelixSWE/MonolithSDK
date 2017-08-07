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


export class CurrencyBubble extends React.Component{
    constructor(props){
        super(props);
        this.state={
            curr_in:this.props.curr_in,
            curr_out:this.props.curr_out,
            value_in:this.props.value_in,
            value_out:this.props.value_out
        }
    }


    render(){
        return(
          <VerticalLayout>
              <p><h1>Da:</h1>{this.state.curr_in} <h1>a:</h1>{this.state.curr_out}</p><br/>
              <p>{this.state.value_in} <h1>-></h1> {this.state.value_out}</p>
          </VerticalLayout>
        );
    }
}