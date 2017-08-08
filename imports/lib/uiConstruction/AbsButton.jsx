import React, { Component } from 'react';
//import { render as reactRender } from 'react-dom';

export default class AbsButton extends React.Component {
    constructor(props){
        super(props);
        if(this.constructor === AbsButton){
            throw new TypeError("AbsButton is abstract");
        }
    }
}
