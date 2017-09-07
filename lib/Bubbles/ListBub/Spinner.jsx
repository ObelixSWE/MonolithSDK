import React, { Component } from 'react';
import './style.css';

export default class Spinner extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
	    return (
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        );
    }
}
