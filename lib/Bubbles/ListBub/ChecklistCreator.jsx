/*
*  Name :   ChecklistCreator.jsx
*  Location : /imports/UI/Bubbles/ListBub
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {class ChecklistCreator}
*/
import BubbleCreator from '../../uiConstruction/BubbleCreator';
import { BubbleDiscriminator } from '../../uiConstruction/BubbleDiscriminator';

import React from 'react';
import ChecklistConfigContainer from './ChecklistConfig';

class ChecklistCreator extends BubbleCreator {
	constructor(bubbleName) {
		super(bubbleName);
	}
	doMakeBubbleSender() {
		return null;
	}
	doMakeBubbleReceiver() {
		return null;
	}
	doMakeConfigurationMenu(closeMenufun) {
		return React.createElement(ChecklistConfigContainer, {closeMenu: closeMenufun});
	}
	doMakeButton() {
		return null;
	}
}


const lc = new ChecklistCreator('checklist');
BubbleDiscriminator.registerBubbleCreator(lc);
