/*
*  Name :   SideArea2.jsx
*  Location : /imports/UI/SideArea2
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


import React, {Component} from "react";
import {BubbleCollection} from "../database/databaseInitialization.js";
import { createContainer } from "meteor/react-meteor-data";
import ReceivedBubble from "./ReceivedBubbles";


class Sidearea2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <ReceivedBubble  bubbles={this.props.sentbubbles}/>
      </div>
    );
  }
}


export default Sidearea2Container = createContainer(() => {
    Meteor.subscribe('bubbles');

    return {
        bubbles: BubbleCollection.find({userId: {$ne: Meteor.userId()}}).fetch(),
        currentUser: Meteor.user()
    };
}, Sidearea2);
