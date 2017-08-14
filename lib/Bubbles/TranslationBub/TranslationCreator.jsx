import BubbleCreator from '../../uiConstruction/BubbleCreator';
import { BubbleDiscriminator } from '../../uiConstruction/BubbleDiscriminator';

import React from 'react';
import TranslationBubble from './TranslationBubble';
import TranslationBubbleConfig from './TranslationBubbleConfig';
import TranslationBubbleCreationButton from './TranslationBubbleCreationButton';

class TranslationCreator extends BubbleCreator {
	constructor(bubbleName) {
		super(bubbleName);
	}
	doMakeBubbleSender(props) {
		return React.createElement(TranslationBubble, props);
	}
	doMakeBubbleReceiver(props) {
		return React.createElement(TranslationBubble, props);
	}
	doMakeConfigurationMenu(closeMenufun) {
		return React.createElement(TranslationBubbleConfig, {closeMenu: closeMenufun});
	}
	doMakeButton(createConfigArea) {
		return React.createElement(TranslationBubbleCreationButton, { onClick: createConfigArea });
	}
}


const tc = new TranslationCreator('translation');
BubbleDiscriminator.registerBubbleCreator(tc);

/*
console.log(cc.doMakeBubbleReceiver({}));
console.log(BubbleDiscriminator.useDoMakeBubbleReceiver('currency', {}));
*/
