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
        this.props.getCheck(event.target.checked);
    }
    render(){
            return(<div><input id={this.props.id} type="checkbox" onChange={this.changeCheck} checked={this.state.check}/>{this.props.value}</div>);
    }

}

export default CheckButton;

/*
How to use:
<CheckButton
    id='id'
    getCheck={this."function name"}
    value="checkbox value"
/>
*/
