import React, {Component} from 'react';
import {BubbleDiscriminator} from '../uiConstruction/BubbleDiscriminator.jsx';


export default class ReceivedBubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="received_bubble">
        {this.props.bubbles.map((bubble) => {BubbleDiscriminator.useDoMakeSender(bubble.bubbleType, bubble, bubble.bubbleId)})}
      <div>
    );
  }
}
