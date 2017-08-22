/*
*  Name :   BubbleConfig.jsx
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
import AbsBubbleConfig from "../../../lib/uiConstruction/AbsBubbleConfig";
import LineEdit from '../../ui/SingleComponents/LineEdit/LineEdit.jsx';
import PushButton from '../../ui/SingleComponents/PushButton/PushButton.jsx';
//import VerticalLayout from '../../ui/Layouts/VerticalLayout.jsx';


export default class AbsList extends AbsBubbleConfig {//mettere la storia dell'astrazione
    constructor(props){
        super(props);
        this.state={ num: 0, op:[],title:''	};
        this.addOpt=this.addOpt.bind(this);
        this.titleChange=this.titleChange.bind(this);
        this.optChange=this.optChange.bind(this);
		this.rows = [];
    }

    addOpt(){
        let n=this.state.num+1;
        this.setState({num:n});
		let id="leopt"+this.state.num;
		this.rows.push(<div>
        		Opzione {n}:<br/>
                <LineEdit id={id} placeholder="Inserisci un opzione" updateState={this.optChange}/>
            	</div>);
        let m={id:id,value:"undefined",check:false};
        let v=this.state.op;
        v.push(m);
        this.setState({op:v});
    }

    titleChange(txt){
        this.setState({title:txt});
    }


    optChange(text,id) {
        let m={id:id,value:text,check:false};
        let v=this.state.op;
        for(let i=0;i<v.length;i++) {
            if (v[i].id === id) {
                v[i].text = text;
            }
        }
        //v[id-1]=m;
        this.setState({op:v});
        //this.state.op[id-1]={id:id,val:text,check:false};

    }

    render() {
        return (
            <div>
                <h3>Nome lista:</h3>
                <LineEdit id="title" placeholder="Inserisci una nome per la lista" updateState={this.titleChange}/><br/>
                {this.rows}<br/>
                <PushButton buttonName="Add" handleClick={this.addOpt}/><br/>
                <PushButton buttonName="Send" handleClick={this.send}/>
            </div>

        );
    }
}
