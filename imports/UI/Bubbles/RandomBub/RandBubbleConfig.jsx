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


export class RandBubbleConfig extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'4'
        };
        this.getValue=this.getValue.bind(this);
        this.send=this.send.bind(this);
    }
    getValue(val){
        this.setState({value:val});
    }

    send(){

    }

    render(){
        return(<VerticalLayout>
            <RadioButtonGroup
            options={["4","6","8","12","20"]}
            getValue={this.getValue}
            />
            <PushButton buttonName="Send" handleClick={}/>
        </VerticalLayout>);
    }

}