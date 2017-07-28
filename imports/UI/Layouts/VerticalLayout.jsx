/*
*  Name :   VerticalLayout.jsx
*  Location : /imports/UI/Layouts
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {Breve descrizione del file}
*  ----------------------------------------------
*  History :
*  Version: {Versione del file}
*  Update data: {Data ultima modifica}
*  Description: {descrizione della modifica}
*  Author: {Autore della modifica}
*/

import style from '../CSS/styles.css';
import {ContainedElement} from 'ContainedElement.jsx';
//importare boostrap

import React, { Component } from 'react';
import { render as reactRender } from 'react-dom';
import { renderToString as reactRenderToString } from 'react-dom/server';
import {ContainedElement} from './ContainedElement.jsx';

class VerticalLayout extends React.Component{
    constructor(props){
        super(props);
        this.renderChildren = this.renderChildren.bind(this);
    }


    renderChildren() {
        return React.Children.map(this.props.children, child => {
            return (<ContainedElement classNames="col-md-12">{child}</ContainedElement>);
        });
    }


    render(){
        var classes = classNames("row",{"hidden" : this.props.hide},this.props.classNames);
        return(
            <div className={classes}>
                {this.renderChildren()}
            </div>
        );
    }
}

export default AwesomeComponent;
