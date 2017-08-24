/*
*  Name : AbsList.jsx
*  Location : /imports/UI/Bubbles/ListBub
*  Author: Emanuele Crespan
*  Creation Data: 2017-06-27
*  Description: {class AbsList}
*/

import React, { Component } from 'react'
import AbsBubbleConfig from "../../../lib/uiConstruction/AbsBubbleConfig";
import LineEdit from '../../ui/SingleComponents/LineEdit/LineEdit.jsx';
import PushButton from '../../ui/SingleComponents/PushButton/PushButton.jsx';



export default class AbsList extends AbsBubbleConfig {
    constructor(props){
        super(props);
        this.state={op:[],title:''	};
        this.addOpt=this.addOpt.bind(this);
        this.delOpt=this.delOpt.bind(this);
        this.titleChange=this.titleChange.bind(this);
        this.optChange=this.optChange.bind(this);
    }


    addOpt(){
        let id="lopt"+(this.state.op.length+1);
        let m={id:id,value:"",check:false};
        let v=this.state.op;
        v.push(m);
        this.setState({op:v});
        this.optChange("",id);
    }

    delOpt(id){
        let o=this.state.op;
        let r=-1;
        for(let i=0;i<o.length;i++)
            if(o[i].id==id)
                r=i;
        if(r>=0){
            o.splice(r, 1);
            this.setState({op:o});
        }
    }

    titleChange(txt){
        this.setState({title:txt});
    }


    optChange(text,id) {
        let v=this.state.op;
        for(let i=0;i<v.length;i++) {
            if (v[i].id == id) {
                v[i].text = text;
            }
        }
        this.setState({op:v});
    }
}
