
import {Meteor} from "meteor/meteor";
import {BubbleCollection, aBubbleCollection} from "../imports/lib/database/databaseInitialization.js";
import {CheckHandler} from "../imports/lib/checks/CheckHandler.js";
//import Check from "../imports/lib/checks/Check";

// ricorda che esiste this.userId
// in caso di interruzione della connessione viene chiamato due volte. come fare?


// throw new Meteor.Error("logged-out", "The user must be logged in to post a comment.");

Meteor.methods({
    insertBubble(bubbleType, data, funDataEdit = 'nonOperationsOnData'){
        data = Meteor.call(funDataEdit,data);
        data.createdAt = new Date();
        data.lastEdited = new Date();
        let validation = CheckHandler.execCheck(bubbleType, data);
        if (!validation.result) {
            console.log(validation.errors);
            let errmsg = "";
            errmsg = validation.errors;
            throw new Meteor.Error("validation failed", errmsg);
        }
        //write to db
        let insPromise = aBubbleCollection.insertAsync(data);
        insPromise.then(
            (result) => {console.log("Insertion of " + result + " succeded");},
            (error) => {throw new Meteor.Error("insertion failed", error);}
        );
        return true;
    },
    updateBubble(bubbleId,modifier, funDataEdit = 'nonOperationsOnData'){ // solo per operazioni di set. controlla le chiavi con set validateUpdate
	modifier = Meteor.call(funDataEdit,modifier);
        if (modifier.$set !== undefined) {
            let verify = 0;
            let bId = BubbleCollection.findOne({"_id" : bubbleId});
            verify = CheckHandler.execCheckOne(bId.bubbleType, modifier);
            //console.log(verify);
            if(!verify.result){
                throw new Meteor.Error("update-invalid","data does not validate in update of " + bubbleId);
            }
        }
        let edit1Promise = aBubbleCollection.updateAsync(bubbleId,modifier);
        edit1Promise.then(
            (result) => {console.log("Update of " + result + " succeded");},
            (error) => {throw new Meteor.Error("update-error", "Update of bubble " + bubbleId + " failed." + error);}
            );
        let edit2Promise = aBubbleCollection.updateAsync(bubbleId,{$set :{lastEdited : new Date()}});
        edit2Promise.then(
            (result) => {console.log("last edit updated successfully");},
            (error) => {throw new Meteor.Error("update-error", "Update of lastedit of bubble " + bubbleId + " failed." + error);}
        );
        return true;
    },
    removeBubble(bubbleId){
        let removePromise = aBubbleCollection.removeAsync(bubbleId);
        removePromise.then(
            (result) => {console.log("Removal of " + result + " succeded");},
            (errormsg) => {throw new Meteor.Error("remove-error", "Remove of bubble from database failed.");
        });
        return true;
    },
    nonOperationsOnData(data){
      return data;
    }
});



/*import { Meteor } from "meteor/meteor";
import {aBubbleCollection} from "../imports/lib/database/databaseInitialization.js";
import {CheckHandler} from "../imports/lib/CheckHandler/CheckHandler.js";

// probabilmente è opportuno cambiare il secondo membro di tutti i meteor error in error senza nessuna frase

Meteor.Meteor.methods({
  insertBubble:function(bubbleType, data){
    let checkRes = CheckHandler.execCheck(bubbleType,data);
    if(!checkRes.result){
      throw new Meteor.Error("validation-failed-ins","Validation failed " + checkRes.errors);
    }
    else{
      data = {
        userId: Meteor.userId(),
        createdAt :  new Date(),
        lastEdited: new Date()
      };
      let insPromise = aBubbleCollection.insertAsync(data);
      insPromise.then(
        (result) => {console.log("Successfull insertion of " + result + ".")},
        (error) => {throw new Meteor.Error("insert-failed", "Database insertion failed: " + error);}
      );
    }
  },
  updateBubble:function(bubbleId, modifier){
    let checkRes = CheckHandler.execCheck(bubbleId, modifier);
    if(!checkRes.result){
      throw new Meteor.Error("validation-failed-upd","Validation failed: " + checkRes.errors);
    }
    else{
      let upPromise = aBubbleCollection.updateAsync(data);
      upPromise.then(
        (result) => {console.log("Successfull update of " + result + ".");},
        (error) => {throw new Meteor.Error("update-failed", "Database update failed: " + error);}
      ).
      then((result) => {
        let upDateProm = aBubbleCollection.updateAsync(result, {$set: {lastEdited: new Date()}});
        upDateProm.catch((error) => {throw new Meteor.Error("time-up-error","Failed update of last edit of bubble.")});
      });
    }
  },
  removeBubble:function(bubbleId){
    let remPromise = aBubbleCollection.removeAsync(bubbleId);
    remPromise.then(
      (success) => {console.log("Bubble " + success + "successfully removed.")},
      (error) => {throw new Meteor.Error("remove-failed", "Failed to remove bubble." + error);}
    );
  }
});
*/
