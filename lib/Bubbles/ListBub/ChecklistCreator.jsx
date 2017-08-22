import BubbleCreator from '../../uiConstruction/BubbleCreator';
import { BubbleDiscriminator } from '../../uiConstruction/BubbleDiscriminator';

import React from 'react';
import ChecklistConfig from './ChecklistConfig';

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
		return React.createElement(ChecklistConfig, {closeMenu: closeMenufun});
	}
	doMakeButton() {
		return null;
	}
}


const lc = new ChecklistCreator('checklist');
BubbleDiscriminator.registerBubbleCreator(lc);

/*
console.log(cc.doMakeBubbleReceiver({}));
console.log(BubbleDiscriminator.useDoMakeBubbleReceiver('currency', {}));
*/
