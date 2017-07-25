/*
*  Name :   Image.jsx
*  Location : /imports/UI/SingleComponents/Image
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


import React, { Component } from 'react'
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'


export class Image extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<img src={this.props.src} alt={this.props.alt} width={this.props.width} height={this.props.height}/>);
    }
}

/*
<Image
    src= // like HTML "src" attribute
    alt=  // like HTML "alt" attribute
    width=  // like HTML "width" attribute
    height=  // like HTML "height" attribute
/>
 */