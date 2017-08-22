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

import React, { Component } from 'react';
import AbsList from './AbsList.jsx';
import LineEdit from '../../ui/SingleComponents/LineEdit/LineEdit.jsx';
import PushButton from '../../ui/SingleComponents/PushButton/PushButton.jsx';
import VerticalLayout from '../../ui/Layouts/VerticalLayout.jsx';
import CheckBoxList from '../../ui/SingleComponents/CheckBoxList/CheckBoxList.jsx';



export default class ListBubbleConfig extends AbsList {
    constructor(props){
        super(props);
        this.state={ num: 0, op:[],title:'', hide:true	};
		this.display_checklist=this.display_checklist.bind(this);
		this.add_checklist=this.add_checklist.bind(this);
		this.send=this.send.bind(this);
		this.rows = [];
		this.op=[{id: 1, value: 'Hello World', check:false},{id: 2, value: 'Installation', check:false}];//arriva un array di stringhe (creare l'array)
    }

	display_checklist(){
		this.setState({hide:!this.state.hide});
	}

	add_checklist(opt){
		let n=this.state.num;
        console.log(opt.length);
		for(let i=0;i<opt.length;i++){
		    n++;
			let id="clopt"+n;
			this.rows.push(<div>
		    		Opzione {n}:<br/>
		            <LineEdit id={id} value={opt[i]} updateState={this.optChange}/>
		        	</div>);
            let m={id:id,value:opt[i],check:false};
            let v=this.state.op;
            v.push(m);
            this.setState({op:v});
            this.optChange(opt[i],id);
		}
		this.setState({num:n});
		this.display_checklist();
	}

	send(){//mettere apposto sto metodo
		console.log("sent??");
	}

    render() {
        let lists=[
            { title: "asdasd", op: [ "s1", "s2" ] },
            { title: "werwer", op: [ "r1", "r2" ] }
        ];
        return (
            <div>
                <h3>Nome lista:</h3>
                <LineEdit id="title" placeholder="Inserisci una nome per la lista" updateState={this.titleChange}/><br/>
                <PushButton buttonName="CheckList" classes="checklist_button btn-sm" handleClick={this.display_checklist}/><br/>
				<CheckList lists={lists} op={this.op} hide={this.state.hide} add={this.add_checklist}/>
                {this.rows}<br/>
                <PushButton buttonName="Add" handleClick={this.addOpt}/><br/>
                <PushButton buttonName="Send" handleClick={this.send}/>
            </div>

        );
    }
}

export class CheckList extends React.Component{
	constructor(props){
        super(props);
		this.state={
			op:[]//forse non serve
		}
//this.props.op
		this.getCheck=this.getCheck.bind(this);
		this.add=this.add.bind(this);
        this.createLists=this.createLists.bind(this);
        this.ops=[];
        this.lists=[];
        this.createLists();
	}

/*
[
{ title:asdasd, op: [ s1, s2 ] },
]
*/

    createLists(){
        let s=0;
        for(let i=0;i<this.props.lists.length;i++){
            let op=[];
            for(let j=0;j<this.props.lists[i].op.length;j++){
                let o={id: s, value: this.props.lists[i].op[j], check:false}
                op.push(o);
                this.ops.push(o);
                s++;
            }
            this.lists.push(
                <div>
                    <span>{this.props.lists[i].title}</span>
                    <CheckBoxList options={op} getCheck={this.getCheck}/>
                </div>
            );
        }
    }

	getCheck(m){
		for(let i=0;i<this.ops.length;i++){
			if(this.ops[i].id==m.id){
				this.ops[i]=m;
			}
		}
	}

	add(){
		let opt=[];
		for(let i=0;i<this.ops.length;i++)
			if(this.ops[i].check==true){
				opt.push(this.ops[i].value);
			}
		this.props.add(opt);
	}

	render() {
        return (
            <div className="checklist_container">
                <VerticalLayout hide={this.props.hide}>
					{this.lists}
					<PushButton buttonName="Add" classes="checklist_button btn-sm" handleClick={this.add}/><br/>
				</VerticalLayout>
            </div>

        );
    }
}

/*
<CheckBoxList options={this.state.op} getCheck={this.getCheck}/>
*/

/*
how to use:
<ListBubbleConfig send={this."function name"}/>
*/
