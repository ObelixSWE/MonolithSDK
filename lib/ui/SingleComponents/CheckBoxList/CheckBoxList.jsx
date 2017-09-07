/*
*  Name :   CheckBoxList.jsx
*  Location : /imports/UI/SingleComponents/CheckBoxList
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
import CheckButton from '../CheckButton/CheckButton.jsx';


export default class CheckBoxList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options: [],
        }
		this.getCheck=this.getCheck.bind(this);
    const op=this.props.options;
		this.state.options=op.map((opt) => <CheckButton id={opt.id.toString()} classes={this.props.classes} getCheck={this.getCheck} value={opt.value}/>);
    }
//
	getCheck(n){
		this.props.getCheck(n);
	}


    render(){

        return(
            <div>
            	{this.state.options}
            </div>
		);
    }
}
/*
var opt=[{id: 1, value: 'Hello World'},{id: 2, value: 'Installation'}];
<CheckBoxList
	classes= // CSS classes
	options={opt}
	getCheck=this."function name"
/>
*/

/*
<CheckBoxList
    options={[{"nome",true/false},{"nome",true/false},...]}  //array of options and boolean value for the "check" state
    f={this."function name"}
/>
*/
