
import BubbleCreator from './BubbleCreator.js';


export const BubbleDiscriminator = {
    BubbleCreatorMap : {},
    registerBubbleCreator(bubbleCreator){
        if(bubbleCreator instanceof BubbleCreator){
            this.BubbleCreatorMap = { [bubbleCreator.bubbleName] :  bubbleCreator};
        }
        else{
            throw new TypeError("registerBubbleCreator needs a BubbleCreator as argument");
        }
    },
    useDoMakeBubbleSender(bubbleType){
        if(this.BubbleCreatorMap && this.BubbleCreatorMap[bubbleType]){
            return this.BubbleCreatorMap[bubbleType].doMakeBubbleSender();
        }
        else{
            throw new Error("Bubbletype " + bubbleType + " not found. You need to register it with BubbleDiscriminator.registerBubbleCreator.");
        }
    },
    useDoMakeBubbleReceiver(bubbleType){
        if(this.BubbleCreatorMap && this.BubbleCreatorMap[bubbleType]){
            return this.BubbleCreatorMap[bubbleType].doMakeBubbleReceiver();
        }
        else{
            throw new Error("Bubbletype " + bubbleType + " not found. You need to register it with BubbleDiscriminator.registerBubbleCreator.");
        }
    },
    useDoMakeBubbleConfigurationMenu(bubbleType){
        if(this.BubbleCreatorMap && this.BubbleCreatorMap[bubbleType]){
            return this.BubbleCreatorMap[bubbleType].doMakeConfigurationMenu();
        }
        else{
            throw new Error("Bubbletype " + bubbleType + " not found. You need to register it with BubbleDiscriminator.registerBubbleCreator.");
        }
    },
    useDoMakeButton(bubbleType){
        if(this.BubbleCreatorMap && this.BubbleCreatorMap[bubbleType]){
            return this.BubbleCreatorMap[bubbleType].doMakeButton();
        }
        else{
            throw new Error("Bubbletype " + bubbleType + " not found. You need to register it with BubbleDiscriminator.registerBubbleCreator.");
        }
    }
};