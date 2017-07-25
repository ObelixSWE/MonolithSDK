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


export class CheckButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            n:this.props.n,
            check:'false'
        }
        this.changeCheck=this.changeCheck.bind(this);
    }
    changeCheck(event){
        if(this.state.check=='false') this.state.check='true';
        else this.state.check='false'
        console.log(this.state.n);
        this.props.f(this.state.n);
    }
    render(){
        if(this.state.check=='true')
            return (<div>
                <input id={this.state.n} type="checkbox" onChange={this.changeCheck} checked/>{this.props.value}<br/>
            </div>);
        else
            return(<div>
                <input id={this.state.n} type="checkbox" onChange={this.changeCheck}/>{this.props.value}<br/>
            </div>);
    }

}

/*
<CheckButton
    n= number  //for the id
    f={this."function name"}
/>
 */