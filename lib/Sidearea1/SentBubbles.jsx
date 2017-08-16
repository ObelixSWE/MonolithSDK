import React, {Component} from 'react';
import {BubbleDiscriminator} from '../uiConstruction/BubbleDiscriminator.jsx';

export default class SentBubbles extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="bubble_button_menu">
                    {this.props.bubbles.map((bubble) => {return BubbleDiscriminator.useDoMakeBubbleSender(bubble.bubbleType, bubble/*,  bubble.bubbleId*/)})}
            </div>
        );
    }
}


/*
createConfigArea function to create config menu
 */
