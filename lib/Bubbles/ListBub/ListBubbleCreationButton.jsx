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
import {BubbleDiscriminator} from '../../uiConstruction/BubbleDiscriminator';


export default class ListBubbleCreationButton extends AbsButton {
	constructor(props) {
		super(props);
		this.handleSecondButton = this.handleSecondButton.bind(this);
	}

	bubbleButtonName() {
		return 'List Bubble';
	}

	bubbleName() {
		return 'list';
	}

	secondAreaName() {
	    return 'checklist';
	}

	/*handleSecondButton() {
	    console.log(this.props);
		//return BubbleDiscriminator.useDoMakeBubbleConfigurationMenu('checklist', this.props.closeMenu);
	}*/

}


/*
how to use:

<ListBubbleCreationButton generate={this."function name"}/>
*/
