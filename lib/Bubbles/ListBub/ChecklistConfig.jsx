/*
*  Name :   ChecklistConfig.jsx
*  Location : /imports/UI/Bubbles/ListBub
*  Author: Emanuele Crespan
*  Creation Data: 2017-06-27
*  Description: {class ChecklistConfig}
*/

import React, { Component } from 'react';
import LineEdit from '../../ui/SingleComponents/LineEdit/LineEdit.jsx';
import PushButton from '../../ui/SingleComponents/PushButton/PushButton.jsx';
import VerticalLayout from '../../ui/Layouts/VerticalLayout.jsx';
import AbsList from './AbsList.jsx';


export default class ChecklistConfig extends React.Component {
    constructor(props){
        super(props);
        this.state={
            //aggiungere -> lists:this.props.lists,
            hidden:[]
        }
        this.display=this.display.bind(this);
        this.removeChecklist=this.removeChecklist.bind(this);
        this.send=this.send.bind(this);
        this.lists=[{ id:"id1", title:"title1", op:[{id:"op1", value:"s1", check:false},{id:"op2", value:"s2", check:false}] },
                    { id:"id2", title:"title2", op:[{id:"op1", value:"s4", check:false},{id:"op2", value:"s5", check:false}] }];
        let h=this.state.hidden;
        for(let i=0;i<this.lists.length;i++)
            h.push(true);
        this.state={
            //aggiungere -> lists:this.props.lists,
            hidden:h,
            n:false
        }
    }

/*
[
{ id:id, title:title, ["s1","s2","s4"] },
{ id:id, title:title, ["s1","s2","s4"] }
]
*/

    display(i){
        let h=this.state.hidden;
        let b=h[i];
        for(let i=0;i<this.state.hidden.length;i++)
            h[i]=true;
        h[i]=!h[i];
        this.setState({hidden:h});
    }

    removeChecklist(id){
        /*let r=-1;
        for(let i=0;i<this.state.lists.length;i++)
            if(id==this.state.lists[i].id)
                r=i;
        let l=this.state.lists;
        l.splice(r, 1);
        this.setState({lists:l});*/
    }

    send(){
        this.setState({n:false});
    }

    render() {
        let rows=[];
        for(let i=0;i<this.lists.length;i++){
            rows.push(
                <div>
                    <PushButton  buttonName={this.lists[i].title} handleClick={()=>this.display(i)}/>
                    <Checklist hide={this.state.hidden[i]} title={this.lists[i].title} op={this.lists[i].op}/>
                </div>
            );
            /*sostituire con -> rows.push(
                <div>
                    <PushButton  buttonName={this.state.lists[i].title} handleClick={()=>this.display(i)}/>
                    <Checklist hide={this.state.hidden[i]} title={this.state.lists[i].title} op={this.state.lists[i].op}/>
                </div>
            );*/
        }
        if(this.state.n)
            return(<ChecklistCreation send={this.send}/>);
        else
            return (
                <div>
                    <h3>-Checklists-</h3>
                    <PushButton  buttonName="New" handleClick={()=>{this.setState({n:true});}}/>
                    {rows}
                </div>
            );
    }
}

export class Checklist extends AbsList {
    constructor(props){
        super(props);
        this.state={
            title:this.props.title,
            op:this.props.op
        }
        this.titleChange=this.titleChange.bind(this);
        this.save=this.save.bind(this);
    }

    save(){

    }

    render() {
        let rows=[];
        for(let i=0;i<this.props.op.length;i++){
            let id=this.state.op[i].id;
    		rows.push(<div>
            		<h5>Option n:{i+1}:</h5>
                    <LineEdit id={id} value={this.state.op[i].value} updateState={this.optChange}/>
                    <PushButton  buttonName="-" handleClick={()=>this.delOpt(id)}/>
                	</div>);
        }
        return (
            <VerticalLayout hide={this.props.hide}>
                <h4>Checklist Name:</h4>
                <LineEdit value={this.props.title} updateState={this.titleChange}/><br/>
                {rows}<br/>
                <PushButton buttonName="Add" handleClick={this.addOpt}/><br/>
                <PushButton buttonName="Save" handleClick={this.save}/>
            </VerticalLayout>

        );
    }
}

export class ChecklistCreation extends AbsList {
    constructor(props){
        super(props);
        this.send=this.send.bind(this);
    }

    send(){
        this.props.send(this.state.op);
    }

    render() {
        let rows=[];
        for(let i=0;i<this.state.op.length;i++){
            let id="lopt"+i;
            rows.push(<div>
		    		Opzione {i+1}:<br/>
		            <LineEdit id={id} value={this.state.op[i].value} updateState={this.optChange}/>
                    <PushButton buttonName="-" handleClick={()=>this.delOpt(this.state.op[i].id)}/>
		        	</div>);
        }
        return (
            <div>
                <h3>Checklist Name:</h3>
                <LineEdit id="title" placeholder="Insert Checklist Name" updateState={this.titleChange}/><br/>
                {rows}<br/>
                <PushButton buttonName="Add" handleClick={this.addOpt}/><br/>
                <PushButton buttonName="Send" handleClick={this.send}/>
            </div>

        );
    }
}
