import React, {Component} from 'react';
import { BubbleDiscriminator } from '../uiConstruction/BubbleDiscriminator.jsx';


export default class SentBubbles extends React.Component {
  constructor(props) {
      console.log("CIAON£");
    super(props);
  }

  render() {
    return (
      <div id="sent_bubbles">
        {this.props.bubbles.map((bubble) => {BubbleDiscriminator.useDoMakeBubbleSender(bubble.bubbleType, bubble)})}
      </div>
    );
  }
}
