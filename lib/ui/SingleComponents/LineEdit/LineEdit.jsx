/*
*  Name :   LineEdit.jsx
*  Location : /imports/UI/SingleComponents/LineEdit
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: A React class that represent a LineEdit html element
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

export default class LineEdit extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.updateState(event.target.value,this.props.id);
    }
    render(){
		var leClass = classNames("",this.props.classes);
        return <input id={this.props.id} type="text" className={leClass} placeholder={this.props.placeholder} onChange={this.handleChange}/>;
    }
}

/*
How to use:
 <LineEdit 
	id= // like HTML id
	classes= // CSS classes
	updateState={this."function name"}
 />
*/