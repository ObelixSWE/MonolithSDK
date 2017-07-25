/*
*  Name :   LabelPushButton.jsx
*  Location : /imports/UI/SingleComponents/LabelPushButton
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {Breve descrizione del file}
*  ----------------------------------------------
*  History :
*  Version: 0.0.1
*  Update data: {Data ultima modifica}
*  Description: {descrizione della modifica}
*  Author: {Autore della modifica}
*/


import React, { Component } from 'react'
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'


export class LabelPushButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.props.f(this.props.labelName);
    }

    render(){
        return(<div>
            <p>{this.props.labelName}</p><PushButton f={this.handleClick} buttonName={this.props.buttonName}/>
        </div>);
    }
}

/*
<LabelPushButton
    labelName= //name for the Label
    buttonName= //name for the Button
    f={this."function name"}
/>
 */