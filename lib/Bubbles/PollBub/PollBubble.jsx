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

import React, { Component } from 'react';
import VerticalLayout from '../../ui/Layouts/VerticalLayout';
import PushButton from '../../ui/SingleComponents/PushButton/PushButton';
import AbsBubble from '../../../lib/uiConstruction/AbsBubble';
import {PollDb} from './PollDb';
import {Meteor} from 'meteor/meteor';


export default class PollBubble extends AbsBubble {
    constructor(props){
        super(props);
        this.addVote=this.addVote.bind(this);
        this.state = {
            voted: (this.props.voted.indexOf(Meteor.userId()) > 0)
        };
    }
    /*
                title:this.props.title,
            num:this.props.num,
            options:this.props.options,
            id:this.props.id,
     */

    addVote(id) {
        let upProm = PollDb.update(this.props._id, 'BubblePollUpdate', { id_ans: id, user: Meteor.userId() });
        upProm.then(
            (success) =>{console.log("Update ok");},
            (error) => {console.log('Something bad happened...');}
        );
    }

    render(){
        let opts=[];
        for (let i=0;i<this.props.options.length;i++){
            opts.push(
                <div>
                    <PushButton id={i} dis={this.state.voted} buttonName={this.props.options[i].val} handleClick={this.addVote}/> Votes: {this.props.options[i].votes} <br/>
                </div>
            )
        }
        if(this.state.voted){
            return(
                <VerticalLayout>
                    <h1>{this.props.title}</h1>
                    <p>You already voted in this survey.</p>
                    {opts}
                </VerticalLayout>
            );
        }
        else {
            return (
                <VerticalLayout>
                    <h1>{this.props.title}</h1>
                    {opts}
                </VerticalLayout>
            );
        }
    }
}

/*
how to use:
<PollBubble title={t} op={o} num={n}/>;
title= poll's title
op = {id:id,val:text,voti:0};
num = number of options

*/
