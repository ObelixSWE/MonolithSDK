import React, { Component } from 'react';
//import { render as reactRender } from 'react-dom';

export default class AbsButton extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		if (this.constructor === AbsButton) {
			throw new TypeError('AbsButton is abstract');
		}
	}

	onClick() {
		props.onClick(this.bubbleName());
	}

	bubbleName(){
        if (this.bubbleName === BubbleDatabase.prototype.bubbleName) {
            throw new TypeError('Please implement bubbleName method of AbsButton derivate class.');
        }
	}

	render() {
        let btnClass = classNames("btn btn-primary btn-lg",this.props.classes);
        return <button id={this.props.id} type="button" className={btnClass} onClick={this.onClick} >{this.props.buttonName}</button>
	}
}

