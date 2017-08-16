import BubbleCreator from '../../uiConstruction/BubbleCreator';
import { BubbleDiscriminator } from '../../uiConstruction/BubbleDiscriminator';

import React from 'react';
import CurrencyBubble from './CurrencyBubble';
import CurrencyBubbleConfig from './CurrencyBubbleConfig';
import CurrencyBubbleCreationButton from './CurrencyBubbleCreationButton';

class CurrencyCreator extends BubbleCreator {
	constructor(bubbleName) {
		super(bubbleName);
	}
	doMakeBubbleSender(props) {
		return React.createElement(CurrencyBubble, Object.assign(props, {key: props._id}));
	}
	doMakeBubbleReceiver(props) {
		return React.createElement(CurrencyBubble, Object.assign(props, {key: props._id}));
	}
	doMakeConfigurationMenu(closeMenufun) {
		return React.createElement(CurrencyBubbleConfig, {closeMenu: closeMenufun});
	}
	doMakeButton(createConfigArea) {
		return React.createElement(CurrencyBubbleCreationButton, { onClick: createConfigArea });
	}
}


export const cc = new CurrencyCreator('currency');
BubbleDiscriminator.registerBubbleCreator(cc);

/*
console.log(cc.doMakeBubbleReceiver({}));
console.log(BubbleDiscriminator.useDoMakeBubbleReceiver('currency', {}));
*/
