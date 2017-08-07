/*
*  Name :   CheckButton.jsx
*  Location : /imports/UI/SingleComponents/CheckButton
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


class CheckButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            check:false,
        }
        this.changeCheck=this.changeCheck.bind(this);
    }
    changeCheck(event){
        this.setState({check:!this.state.check});
		let m=[];
		m.push(this.props.id);
		m.push(this.props.value);
		m.push(event.target.checked);
        this.props.getCheck(m);
    }
    render(){
			var chClass = classNames("",this.props.classes);
            return(<div><input id={this.props.id} className={chClass} type="checkbox" onChange={this.changeCheck} checked={this.state.check}/>{this.props.value}</div>);
    }

}

export default CheckButton;

/*
How to use:
<CheckButton
    id= // like HTML id
	classes= // CSS classes
    getCheck={this."function name"}
    value="checkbox value"
/>
*/
