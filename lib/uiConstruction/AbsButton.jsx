import React, { Component } from 'react';
//import { render as reactRender } from 'react-dom';

export default class AbsButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		if (this.constructor === AbsButton) {
			throw new TypeError('AbsButton is abstract');
		}
	}

	handleClick() {
		this.props.onClick(this.bubbleName());
	}

	bubbleName(){
        if (this.bubbleName === BubbleDatabase.prototype.bubbleName) {
            throw new TypeError('Please implement bubbleName method of AbsButton derivate class.');
        }
	}

    bubbleButtonName(){
        if (this.bubbleName === BubbleDatabase.prototype.bubbleName) {
            throw new TypeError('Please implement bubbleButtonName method of AbsButton derivate class.');
        }
    }

	render() {
        let btnClass = classNames("btn btn-primary btn-lg bubble-menu-button",this.props.classes);
        return <button id={this.props.id} type="button" className={btnClass} onClick={this.handleClick}>{this.bubbleButtonName()}</button>
	}
}

