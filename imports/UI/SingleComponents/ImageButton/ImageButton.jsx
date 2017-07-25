/*
*  Name :   ImageButton.jsx
*  Location : /imports/UI/SingleComponents/ImageButton
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {Breve descrizione del file}
*  ----------------------------------------------
*  History :
*  Version: 0.0.1
*  Update data: {Data ultima modifica}
*  Description: {descrizione della modifica}
*  Author: {Autore della modifica}
*/



import React, { Component } from 'react'
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'


export class ImageButton extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        this.props.f(event.target.src);
    }
    render(){
        return(<input type="image" src={this.props.src} alt={this.props.alt} width={this.props.width} height={this.props.height} onClick={this.handleClick}/>);
    }
}

/*
<ImageButton
    src= // like HTML "src" attribute
    alt=  // like HTML "alt" attribute
    width=  // like HTML "width" attribute
    height=  // like HTML "height" attribute
    f={this."function name"}
/>
 */