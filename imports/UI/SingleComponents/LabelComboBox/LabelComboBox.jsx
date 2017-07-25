/*
*  Name :   LabelComboBox.jsx
*  Location : /imports/UI/SingleComponents/LabelComboBox
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


export class LabelComboBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selected:''
        }
        this.OptSelected=this.OptSelected.bind(this);
    }
    OptSelected(op){
        this.state.selected=op;console.log(this.state.selected);
        this.props.f(this.state.selected);
    }

    render(){
        return(<div>
            <p>{this.props.labelName}</p><ComboBox options={this.props.options} f={this.OptSelected}/>
        </div>);
    }
}

/*
<LabelComboBox
    labelName= //name for the Label
    options= {["op1","op2"]}
/>
 */