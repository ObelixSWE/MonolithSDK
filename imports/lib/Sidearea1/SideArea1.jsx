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
import SentBubble from './SentBubble.jsx';
import {BubbleCollection} from "../database/databaseInitialization.js";
import { createContainer } from 'meteor/react-meteor-data';




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
        <SentBubble bubbles={this.props.bubbles}/>
      </div>
    );
  }
}


export default Sidearea1Container = createContainer(() => {
    let handle = Meteor.subscribe('BubblesPublication');

    return {
        bubbles: BubbleCollection.find({userId: {$eq: Meteor.userId()}}).fetch(),
        listLoading: ! handle.ready(),
        currentUser: Meteor.user()
    };
}, Sidearea1);
