import React, { Component } from 'react';
//import { render as reactRender } from 'react-dom';

export default class AbsBubble extends React.Component{
    constructor(props,bubbleId/*,bubbleName*/){
        super(props);
        if(this.constructor === AbsBubble){
            throw new TypeError("AbsBubble is abstract");
        }
        /* this.bubbleName = bubbleName;*/
        this.bubbleId = bubbleId;
    }
}
