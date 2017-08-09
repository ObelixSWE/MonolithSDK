// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See prova-react-01-tests.js for an example of importing.
//export const name = 'prova-react-01';




/*function flyin(command, arg1, item) {
	if (command === 'flyin') {
		var tmpl = RocketChat.TabBar.getTemplate()
		if (tmpl !== 'flyin') RocketChat.TabBar.setTemplate('flyin')
		if (RocketChat.TabBar.isFlexOpen()) {
			RocketChat.TabBar.closeFlex()
		} else {
			RocketChat.TabBar.openFlex()
		}
  }
}*/

Meteor.startup(() => {
	RocketChat.TabBar.addButton({
		groups: ['channel', 'privategroup', 'directmessage'],
		id: 'bubble_menu',
		title: 'bubble_menu',
		icon: 'icon-rocket',
		template: 'templateSideArea1',
		order: 11
	});

	RocketChat.TabBar.addButton({
		groups: ['channel', 'privategroup', 'directmessage'],
		id: 'bubble_view',
		title: 'bubble_view',
		icon: 'icon-rocket',
		template: 'templateSideArea2',
		order: 12
	});




	/*RocketChat.slashCommands.add('flyin', flyin, {
		description: 'Show / hide the panel',
	})*/
});









//import RocketChat from 'RocketChat';
/*
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Bolla_test from './Bubble_test.jsx';



Meteor.startup(function() {
    RocketChat.MessageTypes.registerType({

        id: 'uni2017_action_link',
        system: true,
        message: 'Messaggio mandato'
    });

   // Assets.getBinary('./test.jpg');

});


fun_fatto3 = function(message)
{
    if(message.msg == '\\bolla_test'){
        message.html = '<div id="'+ 'bolla_test_'+ message._id +'"></div>';
        //render(<Bolla_test bolla_id="{message._id}"/>, document.getElementById('bolla_test_'+ message._id));
    }

   return message;
}

RocketChat.callbacks.add('renderMessage', fun_fatto3, RocketChat.callbacks.priority.LOW, 'uni2017');
*/
