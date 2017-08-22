/*
*  Name :   ListBubbleConfig.jsx
*  Location : /imports/UI/Bubbles
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: {class ListBubbleConfig}
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
		this.display_checklist=this.display_checklist.bind(this);
		this.add_checklist=this.add_checklist.bind(this);
		this.send=this.send.bind(this);
		this.rows = [];
		this.op=[{id: 1, value: 'Hello World', check:false},{id: 2, value: 'Installation', check:false}];
    }

	display_checklist(){
		this.setState({hide:!this.state.hide});
	}

	add_checklist(opt){
		let n=this.state.num;
        console.log(this.state.num);
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

	send(){
		console.log("sent??");
	}

    render() {
        return (
            <div>
                <h3>Nome lista:</h3>
                <LineEdit id="title" placeholder="Inserisci una nome per la lista" updateState={this.titleChange}/><br/>
                <PushButton buttonName="CheckList" classes="checklist_button btn-sm" handleClick={this.display_checklist}/><br/>
				<CheckList op={this.op} hide={this.state.hide} add={this.add_checklist}/>
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
			if(o[i].id===m.id){
				o[i]=m;
			}
		}
		this.setState({op:o});
	}

	add(){
		let opt=[];
		for(let i=0;i<this.state.op.length;i++)
			if(this.state.op[i].check===true){
				opt.push(this.state.op[i].value);
			}
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
