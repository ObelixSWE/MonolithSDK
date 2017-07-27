/*
*  Name :   LineEditComboBox.jsx
*  Location : /imports/UI/SingleComponents/LineEditComboBox
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: A React class that represent a LineEdit and a ComboBox
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


export class LineEditComboBox extends React.Component{
    /*
    tolte le funzioni per la gestione degli stati e rimandato il compito alle funzioni passate dalle props
    */
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
            <LineEdit updateState={this.props.textUpdate}/><ComboBox options={this.props.options} mGetSelection={this.props.comboUpdate}/>
        </div>);
    }
}

/*
How to use:
<LineEditComboBox
    textUpdate={this."function name"}
    options={["a","b","c"]} //array of option
    comboUpdate={this."function name"}
/>
*/
