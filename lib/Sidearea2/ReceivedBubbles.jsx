import React from 'react';
import {BubbleDiscriminator} from '../uiConstruction/BubbleDiscriminator.jsx';

export default class ReceivedBubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.bubbles.length) {
        return (
            <div id="received_bubble">
                {this.props.bubbles.map((bubble) => {
                    return (
                        <div key={bubble._id} className="bubbleborder">
                            {BubbleDiscriminator.useDoMakeBubbleReceiver(bubble.bubbleType, bubble)}
                        </div>
                    );
                })}
            </div>
        );
    }
    else{
        return (
            <div id="received_bubble">
                <p>You haven't received any bubble yet.</p>
            </div>
        );
    }
  }
}
