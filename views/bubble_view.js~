// Template.flyin.helpers({
// 	// funcName: function() {
// 	// 	return null // whatever
//  // }
// })

import renderMyStuff from './bv_render.js'; // cosi è il default export. se ci metto la parentesi graffa allora posso togliere il default
import { Template } from 'meteor/templating';
import './bubble_view.html';

import styles from './main.css'

Template.bubble_view.onRendered(function() {
	renderMyStuff();
	console.log('rendering!');
});
