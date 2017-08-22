
Meteor.startup(() => {
	RocketChat.TabBar.addButton({
		groups: ['channel', 'privategroup', 'directmessage', 'direct', 'group'],
		id: 'bubble_menu',
		title: 'bubble_menu',
		icon: 'hashtag',
		template: 'templateSideArea1',
		order: 110
	});

	RocketChat.TabBar.addButton({
		groups: ['channel', 'privategroup', 'directmessage', 'direct', 'group'],
		id: 'bubble_view',
		title: 'bubble_view',
		icon: 'hashtag',
		template: 'templateSideArea2',
		order: 120
	});
});

