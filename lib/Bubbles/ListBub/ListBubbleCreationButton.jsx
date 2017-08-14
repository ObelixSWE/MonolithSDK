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


import AbsButton from '../../../lib/uiConstruction/AbsButton';


export default class ListBubbleCreationButton extends AbsButton {
	constructor(props) {
		super(props);
	}

	bubbleButtonName() {
		return 'List Bubble';
	}

	bubbleName() {
		return 'list';
	}

}


/*
how to use:

<ListBubbleCreationButton generate={this."function name"}/>
*/
