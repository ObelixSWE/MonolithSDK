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
import {BubbleCollection} from "../database/databaseInitialization.js";
import { createContainer } from 'meteor/react-meteor-data';
import {BubbleDiscriminator} from "../uiConstruction/BubbleDiscriminator";
import ConfigArea from './ConfigArea';
import SentBubbles from './SentBubbles';

class Sidearea1 extends React.Component {
  constructor(props) {
    super(props);
    this.createConfigArea = this.createConfigArea.bind(this);
    this.closeConfig = this.closeConfig.bind(this);
    this.state = {
        openedConfigMenu : null
    }
  }

  closeConfig(){
      this.setState({openedConfigMenu: null});
  }

  createConfigArea(toBeInserted){
      this.setState({openedConfigMenu: BubbleDiscriminator.useDoMakeBubbleConfigurationMenu(toBeInserted, this.closeConfig)});

  }


  render() {
    return (
      <div>
         <BubbleMenu createConfigArea={this.createConfigArea}/>
          <ConfigArea menu={this.state.openedConfigMenu} />
	    <h3 className="bubbleHeader">Bubbles you sent</h3>
          <SentBubbles bubbles={this.props.bubbles}/>
      </div>
    );
  }
}



export default Sidearea1Container = createContainer(() => {
     Meteor.subscribe('bubbles', Session.get('openedRoom'));
   // console.log(BubbleCollection.find({}).fetch());
    return {
        bubbles: BubbleCollection.find({userId: {$eq: Meteor.userId()}}, { sort: {createdAt: -1} }).fetch(),
        currentUser: Meteor.user()
    };
}, Sidearea1);

