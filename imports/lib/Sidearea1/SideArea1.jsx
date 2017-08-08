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

class Sidearea1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="sidearea1">
      <BubbleMenu />
      <SentBubble bubbles={this.props.sentbubbles}/>
      </div>
    );
  }
}
