import React, {Component} from 'react';
import {BubbleDiscriminator} from '../uiConstruction/BubbleDiscriminator.jsx';


export default class SentBubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="sent_bubble">
        {this.props.bubbles.map((bubble) => {BubbleDiscriminator.useDoMakeBubbleSender(bubble.bubbleType, bubble, bubble.bubbleId)})}
      </div>
    );
  }
}
