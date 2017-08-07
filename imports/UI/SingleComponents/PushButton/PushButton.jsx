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

class PushButton extends React.Component {
    constructor(props){
        super(props);
        this.onClick=this.onClick.bind(this);
    }

    onClick(){
        this.props.handleClick(this.props.id);
    }

    render() {
        var btnClass = classNames("btn btn-primary btn-lg",this.props.classes);
        if(this.props.dis==true)
            return <button id={this.props.id} type="button" className={btnClass} onClick={this.onClick} disabled>{this.props.buttonName}</button>
        else
            return <button id={this.props.id} type="button" className={btnClass} onClick={this.onClick} >{this.props.buttonName}</button>
    }
}

export default PushButton;

/*
How to use:
<PushButton
    id= // like HTML "id" attribute
	classes= // CSS classes
    handleClick={this."function name"}
    buttonName="button name"
/>
*/
