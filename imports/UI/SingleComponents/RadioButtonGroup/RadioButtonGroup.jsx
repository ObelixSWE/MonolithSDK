/*
*  Name :   RadioButtonGroup.jsx
*  Location : /imports/UI/SingleComponents/RadioButtonGroup
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


export class RadioButtonGroup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options:this.props.options,
            value:''
        }
    }

    handleClick(event){
        this.state.value=event.target.value;
        this.props.f(this.state.value)
    }
    render(){
        let el=[];
        for (var i=0;i<this.state.options.length;i++)
            el.push(<div><input id={i} type="radio" value={this.state.options[i]} onClick={this.handleClick.bind(this)}/>{this.state.options[i]}</div>)
        return(<div>
            {el}
        </div>);
    }

}

/*
<RadioButtonGroup
    options={["a","b","c"]} //array of options
    f={this."function name"}
/>
 */