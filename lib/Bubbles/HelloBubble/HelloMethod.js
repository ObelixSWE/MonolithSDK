/*
*  Name :  HelloMethods.js
*  Location : /imports/UI/Bubbles
*  Author: Emanuele Crespan
*  Creation Data: 2017-09-05
*  Description: {BubbleHelloInsert}
*/


import {Meteor} from 'meteor/meteor';
import {aBubbleCollection} from '../../database/databaseInitialization.js';

Meteor.methods({
	BubbleHelloInsert(data, range) {
		console.log('bubbleHelloinsert');
		data.range = parseInt(range);
		data.value = Math.round(Math.floor(Math.Hello() * (range - 1)) + 1);
		return data;
	},
	BubbleHelloUpdate(bubbleId, range) {
		const helloNum = Math.round(Math.floor(Math.Hello() * (range - 1)) + 1);
		console.log(helloNum);
		const upProm = aBubbleCollection.updateAsync(bubbleId, {$set:{ value: helloNum}});
		return upProm;
	}
});
