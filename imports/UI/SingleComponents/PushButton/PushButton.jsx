/*
*  Name :   PushButton.jsx
*  Location : /imports/UI/SingleComponents/PushButton
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: A React class that represent a Button
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

export class PushButton extends React.Component {
    constructor(props){
        super(props);
        this.onclick=this.onclick.bind(this);
    }
    onclick(){
        this.props.handleClick(this.props.id);
    }

    render() {
        return <button id=this.props.id type="button" onClick={this.onclick}>{this.props.buttonName}</button>
    }
}

/*
How to use:
<PushButton
    id= // like HTML "id" attribute
    handleClick={this."function name"}
    buttonName="button name"
/>
*/
