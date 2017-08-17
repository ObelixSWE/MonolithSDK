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
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'
import AbsBubbleConfig from "../../../lib/uiConstruction/AbsBubbleConfig";
import LineEdit from '../../ui/SingleComponents/LineEdit/LineEdit.jsx';
import PushButton from '../../ui/SingleComponents/PushButton/PushButton.jsx';
import VerticalLayout from '../../ui/Layouts/VerticalLayout.jsx';
import CheckBoxList from '../../ui/SingleComponents/CheckBoxList/CheckBoxList.jsx';



export default class ListBubbleConfig extends AbsBubbleConfig {
    constructor(props){
        super(props);
        this.state={ num: 0, op:[],title:'',
					hide:true,
					}
        this.addOpt=this.addOpt.bind(this);
        this.titleChange=this.titleChange.bind(this);
        this.optChange=this.optChange.bind(this);
        this.send=this.send.bind(this);
		this.display_checklist=this.display_checklist.bind(this);
		this.add_checklist=this.add_checklist.bind(this);
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
    }

    titleChange(txt){
        this.setState({title:txt});

    }


    optChange(text,id) {
      let m={id:id,value:text,check:false};
      let v=this.state.op;
      v[id-1]=m;
      this.setState({op:v});
     //this.state.op[id-1]={id:id,val:text,check:false};

    }

    send(){
      let m=this.state;//{num: this.state.num, op: this.state.op, title:this.state.title}
      this.props.send(m);
    }

	display_checklist(){
		this.setState({hide:!this.state.hide});
	}

	add_checklist(opt){
		for(let i=0;i<opt.length;i++){
			let n=this.state.num+1;
		    this.setState({num:n});
			let id="leopt"+this.state.num;
			this.rows.push(<div>
		    		Opzione {n}:<br/>
		            <LineEdit id={id} value={opt[i].value} updateState={this.optChange}/>
		        	</div>);
		}
		this.display_checklist();
	}

    render() {
		let op=[{id: 1, value: 'Hello World', check:false},{id: 2, value: 'Installation', check:false}];
        return (
            <div>
                <h1>Nome lista:</h1><br/>
                <LineEdit id="title" placeholder="Inserisci una nome per la lista" updateState={this.titleChange}/><br/>
                <PushButton buttonName="CheckList" classes="checklist_button btn-sm" handleClick={this.display_checklist}/><br/>
				<CheckList op={op} hide={this.state.hide} add={this.add_checklist}/>
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
			op:this.props.op
		}

		this.getCheck=this.getCheck.bind(this);
		this.add=this.add.bind(this);
	}

	getCheck(m){
		let o=this.state.op;
		for(let i=0;i<o.length;i++){
			if(o[i].id==m.id){
				o[i]=m;
			}
		}
		this.setState({op:o});
	}

	add(){
		let opt=[];
		for(let i=0;i<this.state.op.length;i++)
			if(this.state.op[i].check==true)
				opt.push(this.state.op[i]);
		this.props.add(opt);
	}

	render() {
        return (
            <div className="checklist_container">
                <VerticalLayout hide={this.props.hide}>
					<CheckBoxList options={this.state.op} getCheck={this.getCheck}/>
					<PushButton buttonName="Add" classes="checklist_button btn-sm" handleClick={this.add}/><br/>
				</VerticalLayout>
            </div>

        );
    }
}

/*
how to use:
<ListBubbleConfig send={this."function name"}/>
*/
