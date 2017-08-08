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


import React, {Component} from 'react';


class Sidearea2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="sidearea2">
      <ReceivedBubble bubbles={this.props.receivedbubbles}/>
      </div>
    );
  }
}
