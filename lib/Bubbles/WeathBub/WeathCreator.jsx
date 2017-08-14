import BubbleCreator from '../../uiConstruction/BubbleCreator';
import { BubbleDiscriminator } from '../../uiConstruction/BubbleDiscriminator';

import React from 'react';
import WeathBubble from './WeathBubble';
import WeathBubbleConfig from './WeathBubbleConfig';
import WeathBubbleCreationButton from './WeathBubbleCreationButton';

class WeathCreator extends BubbleCreator {
	constructor(bubbleName) {
		super(bubbleName);
	}
	doMakeBubbleSender(props) {
		return React.createElement(WeathBubble, props);
	}
	doMakeBubbleReceiver(props) {
		return React.createElement(WeathBubble, props);
	}
	doMakeConfigurationMenu(closeMenufun) {
		return React.createElement(WeathBubbleConfig, {closeMenu: closeMenufun});
	}
	doMakeButton(createConfigArea) {
		return React.createElement(WeathBubbleCreationButton, { onClick: createConfigArea });
	}
}



const wc = new WeathCreator('weather');
BubbleDiscriminator.registerBubbleCreator(wc);

/*
console.log(cc.doMakeBubbleReceiver({}));
console.log(BubbleDiscriminator.useDoMakeBubbleReceiver('currency', {}));
*/
