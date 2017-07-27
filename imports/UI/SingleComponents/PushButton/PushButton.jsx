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
    }
    render() {
        return <button type="button" onClick={this.props.handleClick}>{this.props.buttonName}</button>
    }
}

/*
How to use:
<PushButton
    handleClick={this."function name"}
    buttonName="button name"
/>
*/
