/*
*  Name :   LineEditPushButton.jsx
*  Location : /imports/UI/SingleComponents/LineEditPushButton
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: A React class that represent a LineEdit with a Button that return the LineEdit content when clicked
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

export class LineEditPushButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
        this.handleClick=this.handleClick.bind(this);
        this.textField=this.textField.bind(this);
    }
    textField(text){
        this.setState({value:text});
    }
    handleClick(){
        this.props.getText(this.state.value);
    }

    render(){
        return(<div>
            <LineEdit updateState={this.textField}/> <PushButton handleClick={this.handleClick} buttonName={this.props.buttonName}/>
        </div>);
    }
}
/*
<LineEditPushButton
    getText={this."function name"}
    buttonName="button name"
/>
*/
