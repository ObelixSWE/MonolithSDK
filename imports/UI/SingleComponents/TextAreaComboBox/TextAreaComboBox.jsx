/*
*  Name :   TextAreaComboBox.jsx
*  Location : /imports/UI/SingleComponents/TextAreaComboBox
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: A React class that represent a TextArea and a ComboBox
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


export class TextAreaComboBox extends React.Component {
    /*
    tolte le funzioni per la gestione degli stati e rimandato il compito alle funzioni passate dalle props
    */
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.textUpdate(event.target.value);
    }

    render(){
        return(<div>
            <textarea width={this.props.width} height={this.props.height} onChange={this.handleChange}></textarea>
            <ComboBox options={this.props.options} getSelection={this.props.comboUpdate}/>
        </div>);
    }
}

/*
How to use:
<TextAreaComboBox
    width="textarea width"
    height="textarea height"
    textUpdate={this."function name"}
    options={["a","b","c"]} // array of options
    comboUpdate={this."function name"}
/>
*/
