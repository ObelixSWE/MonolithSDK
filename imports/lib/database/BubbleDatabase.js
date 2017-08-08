/**
 * Created by nick on 31/07/17.
 */

import {aBubbleCollection} from "./databaseInitialization.js";
import {aMeteor} from "../callerInitialization.js";

export default class BubbleDatabase {
    constructor(){
        if(this.constructor === BubbleDatabase){
            throw new TypeError("Abstract class BubbleDatabase cannot be instantiated directly.");
        }
        // BINDING:
       // this.insert = this.insert.bind(this);
        this.insertSuccess = this.insertSuccess.bind(this);
        this.insertFailure = this.insertFailure.bind(this);
        //this.update = this.update.bind(this);
        this.updateSuccess = this.updateSuccess.bind(this);
        this.updateFailure = this.updateFailure.bind(this);
        //this.remove = this.remove.bind(this);
        this.removeSuccess = this.removeSuccess.bind(this);
        this.removeFailure = this.removeFailure.bind(this);
    }
    bubbleType(){
        if(this.bubbleType === BubbleDatabase.prototype.bubbleType){
            throw new TypeError("Please implement bubbleType method of BubbleDatabase derivate class.");
        }
    }
    insert(bubbleType,data){
        let insPromise = aMeteor.callAsync("insertBubble",bubbleType, "room91", data);
        insPromise.then(
            (Success) => {this.insertSuccess(Success);},
            (Error) => {this.insertFailure(Error);}
            );
    }
    update(bubbleId,modifier){
        console.log(this.bubbleType());
        console.log(modifier);
        let upPromise = aMeteor.callAsync("updateBubble", bubbleId,modifier);
        upPromise.then(
            (Success) => {this.updateSuccess(Success);},
            (Error) => {this.updateFailure(Error);}
        );
    }
    remove(bubbleId){
        let remPromise = aMeteor.callAsync("removeBubble",bubbleId);
        remPromise.then(
            (Success) => {this.removeSuccess(Success);},
            (Error) => {this.removeFailure(Error);}
        );
    }

    insertSuccess(result){
        console.log(result);
    }
    insertFailure(errormsg){
        console.log(errormsg);
    }
    updateSuccess(result){
        console.log(result);
    }
    updateFailure(errormsg){
        console.log(errormsg);
    }
    removeSuccess(result){
        console.log(result);
    }
    removeFailure(errormsg){
        console.log(errormsg);
    }
}

/*
SIMPLE SCHEMA:
https://github.com/aldeed/node-simple-schema

ERRORS THAT CAN BE RETURNED
reason
0 :{name: "bubbleType", type: "required"}

[ { name: 't2',
 value: 132,
 type: 'expectedType',
 dataType: 'String' },
{ name: 't3', type: 'keyNotInSchema', value: 9 }

 */