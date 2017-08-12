/*
*  Name :   BubbleCreationButton.jsx
*  Location : /imports/UI/Bubbles
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
import PushButton from "../../ui/SingleComponents/PushButton/PushButton"
import AbsButton from "../../../lib/uiConstruction/AbsButton";

export default class RandBubbleCreationButton extends AbsButton {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <PushButton
                className="btn"
                buttonName="RandomDice"
                handleClick={this.props.generate}
            />
        );
    }
}


/*
How to use:
<RandBubbleCreationButton generate={this."function name"}/>

*/
