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


export class CheckBoxList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            options: this.props.options

        }
    }
    getSelection(event){
        var i=event.target.id;
        if(this.state.options[i].check) this.state.options[i].check=false;
        else
            this.state.options[i].check=true;
        console.log("elemento "+i+": "+this.state.options[i].check)
        this.props.f(this.state.options[i].val);
    }

    render(){
        var el=[];
        for (var i=0;i< this.state.options.length;i++)
        {
            if(this.state.options[i].check==false)
                el.push(<div><input id={i} type="checkbox" onChange={this.getSelection.bind(this)}/>{this.state.options[i].val}<br/></div>);
            else
                el.push(<div><input id={i} type="checkbox" onChange={this.getSelection.bind(this)} checked/>{this.state.options[i].val}<br/></div>);
        }
        return(<div>
            {el}
        </div>);
    }
}

/*
<CheckBoxList
    options={[{"nome",true/false},{"nome",true/false},...]}  //array of options and boolean value for the "check" state
    f={this."function name"}
/>
*/