/*
*  Name :   BubbleCreationButton.jsx
*  Location : /imports/UI/Bubbles
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: {Breve descrizione del file}
*/

import AbsButton from '../../../lib/uiConstruction/AbsButton';

export default class PollBubbleCreationButton extends AbsButton {
	constructor(props) {
		super(props);
	}

	bubbleButtonName() {
		return 'Poll Bubble';
	}

	bubbleName() {
		return 'poll';
	}

}

/*
how to use:
<PollBubbleCreationButton generate={this."function name"}/>
*/
