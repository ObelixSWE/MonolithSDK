/*
*  Name :   Bubble.jsx 
*  Location : /imports/UI/Bubbles
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {Breve descrizione del file}
*  ----------------------------------------------
*  History :
*  Version: {Versione del file}
*  Update data: {Data ultima modifica}
*  Description: {descrizione della modifica}
*  Author: {Autore della modifica}
*/

import React, { Component } from 'react'
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'
import VerticalLayout from "../../Layouts/VerticalLayout";
import CheckBoxList from "../../SingleComponents/CheckBoxList/CheckBoxList";
import AbsBubble from "../../../lib/uiConstruction/AbsBubble";


export default class ListBubble extends AbsBubble{
    constructor(props){
        super(props);
        this.state={
            title:this.props.title,
            num:this.props.num,
            op:this.props.op,
            id:this.props.id
        }
        this.changeCheck=this.changeCheck.bind(this);
    }

    changeCheck(){
        i=event.target.id;
        var stateCopy=Object.assign({},this.state);
        if(stateCopy.op[i].check=='false') stateCopy.op[i].check='true'
        else stateCopy.op[i].check='false'
        this.setState(stateCopy);


    }

    render(){
        let opts="[";
        for (i=0;i<this.state.num;i++){
            opts=opts+"{\""+this.state.op[i].val+"\","+this.state.op[i].check+"},";
        }
        opts[opts.lastIndexOf(",")]="]";
        return(
            <VerticalLayout>
                <h1>{this.state.title}</h1>
                <CheckBoxList options={opts} /*f=????*//>
            </VerticalLayout>
        );
    }

}

//options={[{"nome",true/false},{"nome",true/false},...]}