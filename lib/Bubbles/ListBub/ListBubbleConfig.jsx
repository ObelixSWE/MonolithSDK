/*
*  Name :   ListBubbleConfig.js
*  Location : /imports/UI/Bubbles/ListBub
*  Author: Emanuele Crespan
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
        this.state={ op:[],title:'', hide:true	};
		this.display_checklist=this.display_checklist.bind(this);
		this.add_checklist=this.add_checklist.bind(this);
		this.send=this.send.bind(this);
    }

	display_checklist(){
		this.setState({hide:!this.state.hide});
	}

	add_checklist(opt){
		let v=this.state.op;
		for(let i=0;i<opt.length;i++){
            let id="leopt"+v.length;
            let m={id:id, value:opt[i].value, check:false};
            v.push(m);
		}
        this.setState({op:v});
		this.display_checklist();
	}

	send(){//mettere apposto questo metodo
		console.log("sent??");
	}

    render() {
        let lists=[
            { title: "asdasd", op: [ "s1", "s2" ] }, //da togliere
            { title: "werwer", op: [ "r1", "r2" ] }
        ];

        let rows=[];

        for(let i=0;i<this.state.op.length;i++){
            let id="lopt"+i;
            rows.push(<div>
		    		Opzione {i+1}:<br/>
		            <LineEdit id={id} value={this.state.op[i].value} updateState={this.optChange}/>
                    <PushButton buttonName="-" handleClick={()=>this.delOpt(this.state.op[i].id)}/>
		        	</div>);
        }
//mettere this.props.lists
        return (
            <div>
                <h3>List Name:</h3>
                <LineEdit id="title" placeholder="Insert List Name" updateState={this.titleChange}/><br/>
                <PushButton buttonName="CheckLists" classes="checklist_button btn-sm" handleClick={this.display_checklist}/><br/>
				<CheckList lists={lists} hide={this.state.hide} add={this.add_checklist}/>
                {rows}<br/>
                <PushButton buttonName="Add" handleClick={this.addOpt}/><br/>
                <PushButton buttonName="Send" handleClick={this.send}/>
            </div>

        );
    }
}

export class CheckList extends React.Component{
	constructor(props){
        super(props);
        let h=[];
        let ops=[];
        for(let i=0;i<this.props.lists.length;i++)
            h.push(true);
        let s=0;
        for(let i=0;i<this.props.lists.length;i++){
            let opt=[];
            for(let j=0;j<this.props.lists[i].op.length;j++){
                let o={id: s, value: this.props.lists[i].op[j], check:false}
                opt.push(o);
                s++;
            }
            ops.push(opt);
        }
        this.state={
            op:ops,
            hidden:h
        }
        this.hide=this.hide.bind(this);
		this.getCheck=this.getCheck.bind(this);
		this.add=this.add.bind(this);
        this.lists=[];

	}

/*
[
{ title:asdasd, op: [ s1, s2 ] },
]
*/

    hide(i){
        let h=this.state.hidden;
        h[i]=!h[i];
        this.setState({hidden:h});
    }


	getCheck(m){
        let o=this.state.op;
		for(let i=0;i<o.length;i++)
            for(let j=0;j<o[i].length;j++)
                if(o[i][j].id==m.id)
                    o[i][j]=m;
        this.setState({op:o});
	}

	add(){
		let opt=[];
		for(let i=0;i<this.state.op.length;i++)
            for(let j=0;j<this.state.op[i].length;j++)
    			if(this.state.op[i][j].check==true){
                    let m={id:this.state.op[i][j].id, value:this.state.op[i][j].value, check:false};
    				opt.push(m);
    			}
		this.props.add(opt);//.splice(0)
	}

	render() {
        let lists=[];
        for(let i=0;i<this.props.lists.length;i++){
            lists.push(
                <div>
                    <PushButton buttonName={this.props.lists[i].title} classes="btn-info btn-xs" handleClick={()=>this.hide(i)}/>
                    <VerticalLayout hide={this.state.hidden[i]}>
                        <CheckBoxList options={this.state.op[i]} getCheck={this.getCheck}/>
                    </VerticalLayout>
                </div>
            );
        }
        return (
            <div className="checklist_container">
                <VerticalLayout hide={this.props.hide}>
					{lists}
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
