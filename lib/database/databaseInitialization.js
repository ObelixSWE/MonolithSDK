/**
 * Created by nick on 31/07/17.
 */

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import Promise from 'bluebird';

export const BubbleCollection = new Mongo.Collection('BubbleCollection');
export const aBubbleCollection = Promise.promisifyAll(BubbleCollection);

/*
if (Meteor.isServer) {
	console.log('Publishing...\n\n');
	Meteor.publish(
		'BubblesPublication',
		function BubblesPublication() {
			return BubbleCollection.find({});
		}
	);
	console.log('Published...\n\n');
}
*/
if (Meteor.isServer) {
	Meteor.publish(
		'bubbles',
		function BubblesPublication() {
			return BubbleCollection.find({});
		});
}

if (Meteor.isClient) {
	Meteor.subscribe('bubbles');
}
