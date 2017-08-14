import BubbleCreator from '../../uiConstruction/BubbleCreator';
import { BubbleDiscriminator } from '../../uiConstruction/BubbleDiscriminator';

import React from 'react';
import ListBubble from './ListBubble';
import ListBubbleConfig from './ListBubbleConfig';
import ListBubbleCreationButton from './ListBubbleCreationButton';

class ListCreator extends BubbleCreator {
	constructor(bubbleName) {
		super(bubbleName);
	}
	doMakeBubbleSender(props) {
		return React.createElement(ListBubble, props);
	}
	doMakeBubbleReceiver(props) {
		return React.createElement(ListBubble, props);
	}
	doMakeConfigurationMenu(closeMenufun) {
		return React.createElement(ListBubbleConfig, {closeMenu: closeMenufun});
	}
	doMakeButton(createConfigArea) {
		return React.createElement(ListBubbleCreationButton, { onClick: createConfigArea });
	}
}


const lc = new ListCreator('list');
BubbleDiscriminator.registerBubbleCreator(lc);

/*
console.log(cc.doMakeBubbleReceiver({}));
console.log(BubbleDiscriminator.useDoMakeBubbleReceiver('currency', {}));
*/
