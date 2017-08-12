/*
 *  Name :   SideArea1.jsx
 *  Location : /imports/UI/SideArea1
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


import React, {Component} from 'react';
import BubbleMenu from './BubbleMenu.jsx';
import SentBubble from './SentBubbles.jsx';
import {BubbleCollection} from "../database/databaseInitialization.js";
import { createContainer } from 'meteor/react-meteor-data';
import {BubbleDiscriminator} from "../uiConstruction/BubbleDiscriminator";



setTimeout(() => {console.log(BubbleCollection.find({}).fetch())}, 10000);

// <SentBubble bubbles={this.props.bubbles}/>

class Sidearea1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      console.log(this.props);
    return (
      <div id="sidearea1">
         <BubbleMenu />
          <h1>CIAO</h1>
          <p>how do you propose to make this work?????</p>
          {this.props.bubbles.map((bubble) => {return BubbleDiscriminator.useDoMakeBubbleSender(bubble.bubbleType, bubble)})}
      </div>
    );
  }
}


export default Sidearea1Container = createContainer(() => {
     Meteor.subscribe('bubbles');
   // console.log(BubbleCollection.find({}).fetch());
    return {
        bubbles: BubbleCollection.find({}).fetch(),
        currentUser: Meteor.user()
    };
}, Sidearea1);

