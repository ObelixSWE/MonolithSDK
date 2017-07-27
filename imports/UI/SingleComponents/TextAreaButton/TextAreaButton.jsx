/*
*  Name :   TextAreaButton.jsx
*  Location : /imports/UI/SingleComponents/TextAreaButton
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: A React class that represent a TextArea and a Button that return the text of the TextArea
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

export class TextAreaButton extends React.Component{// non funziona il ridimensionamento
    constructor(props){
        super(props);
        this.state={
            value:''
        }
        this.textField=this.textField.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    textField(event){
        this.setState({value:event.target.value});
    }
    handleClick(){
        this.props.getText(this.state.value);
    }
    render(){
        return(<div>
                <textarea width={this.props.width} height={this.props.height} onChange={this.textField}></textarea>
                <PushButton handleClick={this.handleClick} buttonName={this.props.buttonName}/>
            </div>

        );
    }
}
/*
How to use:
<TextAreaButton
    getText={this."function name"}
    width="textarea width"
    height="textarea height"
    buttonName="button name"
/>
*/
