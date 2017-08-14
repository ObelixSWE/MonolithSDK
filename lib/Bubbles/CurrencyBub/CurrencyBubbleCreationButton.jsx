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

import React, { Component } from 'react';
import AbsButton from '../../../lib/uiConstruction/AbsButton.jsx';


export default class CurrencyBubbleCreationButton extends AbsButton {
	constructor(props) {
		super(props);
	}

	bubbleName() {
		return 'currency';
	}

}
