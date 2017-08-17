
Meteor.startup(() => {
	RocketChat.TabBar.addButton({
		groups: ['channel', 'privategroup', 'directmessage', 'direct', 'group'],
		id: 'bubble_menu',
		title: 'bubble_menu',
		icon: 'icon-rocket',
		template: 'templateSideArea1',
		order: 110
	});

	RocketChat.TabBar.addButton({
		groups: ['channel', 'privategroup', 'directmessage', 'direct', 'group'],
		id: 'bubble_view',
		title: 'bubble_view',
		icon: 'icon-rocket',
		template: 'templateSideArea2',
		order: 120
	});
});

