/*
*  Name :   TextAreaButton.jsx
*  Location : /imports/UI/SingleComponents/TextAreaButton
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


export class TextAreaButton extends React.Component{
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
        this.props.f(this.state.value);
    }
    render(){
        return(<div>
                <textarea width={this.props.width} height={this.props.height} onChange={this.textField}></textarea>
                <PushButton f={this.handleClick} buttonName={this.props.buttonName}/>
            </div>

        );
    }
}

/*
<TextAreaButton
    width= // like HTML "width" attribute
    height= // like HTML "height" attribute
    buttonName= // string for the buttonName
    f={this."function name"}
/>
 */