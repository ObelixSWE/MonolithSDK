import BubbleCreator from './BubbleCreator.jsx';


export const BubbleDiscriminator = {
    BubbleCreatorMap: {},
    registerBubbleCreator(bubbleCreator) {
        if (bubbleCreator instanceof BubbleCreator) {
            this.BubbleCreatorMap = {[bubbleCreator.bubbleName]: bubbleCreator};
        }
        else {
            throw new TypeError('registerBubbleCreator needs a BubbleCreator as argument');
        }
    },
    useDoMakeBubbleSender(bubbleType, data, bubbleId) {
        if (this.BubbleCreatorMap && this.BubbleCreatorMap[bubbleType]) {
            return this.BubbleCreatorMap[bubbleType].doMakeBubbleSender(data);
        }
        else {
            throw new Error('Bubbletype ' + bubbleType + ' not found. You need to register it with BubbleDiscriminator.registerBubbleCreator.');
        }
    },
    useDoMakeBubbleReceiver(bubbleType, data, bubbleId) {
        if (this.BubbleCreatorMap && this.BubbleCreatorMap[bubbleType]) {
            return this.BubbleCreatorMap[bubbleType].doMakeBubbleReceiver(data);
        }
        else {
            throw new Error('Bubbletype ' + bubbleType + ' not found. You need to register it with BubbleDiscriminator.registerBubbleCreator.');
        }
    },
    useDoMakeBubbleConfigurationMenu(bubbleType) {
        if (this.BubbleCreatorMap && this.BubbleCreatorMap[bubbleType]) {
            return this.BubbleCreatorMap[bubbleType].doMakeConfigurationMenu();
        }
        else {
            throw new Error('Bubbletype ' + bubbleType + ' not found. You need to register it with BubbleDiscriminator.registerBubbleCreator.');
        }
    },
    useDoMakeButton(bubbleType) {
        if (this.BubbleCreatorMap && this.BubbleCreatorMap[bubbleType]) {
            return this.BubbleCreatorMap[bubbleType].doMakeButton();
        }
        else {
            throw new Error('Bubbletype ' + bubbleType + ' not found. You need to register it with BubbleDiscriminator.registerBubbleCreator.');
        }
    }
};
