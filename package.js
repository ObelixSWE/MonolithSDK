Package.describe({
	name: 'monolith-sdk',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: '',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});
/*
Npm.depends({
  'packaged-app-reactjs':'0.1.3'
})*/

Package.onUse(function(api) {
	api.versionsFrom('1.4.4.2');
	api.use(['rocketchat:lib@0.0.1'], ['client', 'server'], { weak: true, unordered: false });
	api.use(['ecmascript',
	  	'rocketchat:lib',
		'rocketchat:ui-message',
		'templating',
	  	'blaze-html-templates',
	  	'react-meteor-data',
		'maxharris9:classnames',
		'react-template-helper'
		/*,
	  'twbs:bootstrap'*/
	]);
	api.mainModule('client/main.js', 'client');
	api.mainModule('server/main.js', 'server');
	api.addFiles([
		'client/main.js',
		'client/templateSideArea1.html',
		'client/templateSideArea2.html',
		'client/SideArea2.js',
		'client/SideArea1.js',
		//'client/main.js',
		'client/sideAreaConfig.js',
		'lib/uiConstruction/AbsButton.jsx',
		'lib/uiConstruction/AbsBubble.jsx',
		'lib/uiConstruction/BubbleCreator.jsx',
		'lib/uiConstruction/AbsBubbleConfig.jsx',
		'lib/uiConstruction/BubbleDiscriminator.jsx',
		'lib/checks/CheckHandler.js',
		'lib/checks/Check.js',
		'lib/callerInitialization.js',
		'lib/database/BubbleDatabase.js',
		'lib/database/databaseInitialization.js',
		//'lib/Bubbles/TranslationBub/TranslationBubble.jsx',
		//'lib/Bubbles/TranslationBub/TranslationBubbleConfig.jsx',
		//'lib/Bubbles/TranslationBub/TranslationBubbleCreationButton.jsx',
		'lib/Bubbles/RandomBub/RandBubbleConfig.jsx',
		'lib/Bubbles/RandomBub/RandBubble.jsx',
		'lib/Bubbles/RandomBub/RandBubbleCreationButton.jsx',
		//'lib/Bubbles/bubbleDiscriminator.js',
		'lib/Bubbles/ListBub/ListBubble.jsx',
		'lib/Bubbles/ListBub/ListBubbleCreationButton.jsx',
		'lib/Bubbles/ListBub/ListBubbleConfig.jsx',
		//'lib/Bubbles/Bubble.jsx',
		'lib/Bubbles/CurrencyBub/CurrencyBubble.jsx',
		'lib/Bubbles/CurrencyBub/CurrencyBubbleCreationButton.jsx',
		'lib/Bubbles/CurrencyBub/CurrencyBubbleConfig.jsx',
		'lib/Bubbles/PollBub/PollBubbleCreationButton.jsx',
		'lib/Bubbles/PollBub/PollBubble.jsx',
		'lib/Bubbles/PollBub/PollBubbleConfig.jsx',
		'lib/Bubbles/PollBub/PollCheck.js',
		'lib/Bubbles/PollBub/PollCreator.jsx',
		'lib/Bubbles/PollBub/PollDb.js',
		'lib/Bubbles/RandomBub/RandCheck.js',
		'lib/Bubbles/RandomBub/RandCreator.jsx',
		'lib/Bubbles/RandomBub/RandDb.js',
		//'lib/Bubbles/TranslationBub/TranslationCheck.js',
		//'lib/Bubbles/TranslationBub/TranslationCreator.jsx',
		//'lib/Bubbles/TranslationBub/TranslationDb.js',
		'lib/Bubbles/ListBub/ListCheck.js',
		'lib/Bubbles/ListBub/ListCreator.jsx',
		'lib/Bubbles/ListBub/ListDb.js',
		'lib/Bubbles/WeathBub/WeathCheck.js',
		'lib/Bubbles/WeathBub/WeathCreator.jsx',
		'lib/Bubbles/WeathBub/WeathDb.js',
		'lib/Bubbles/CurrencyBub/CurrencyCheck.js',
		'lib/Bubbles/CurrencyBub/CurrencyCreator.jsx',
		'lib/Bubbles/CurrencyBub/CurrencyDb.js',
		//'lib/Bubbles/BubbleCreationButton.jsx',
		//'lib/Bubbles/BubbleConfig.jsx',
		//'lib/Bubbles/bubbleCreator.js',
		'lib/Bubbles/WeathBub/WeathBubbleConfig.jsx',
		'lib/Bubbles/WeathBub/WeathBubble.jsx',
		'lib/Bubbles/WeathBub/WeathBubbleCreationButton.jsx',
		'lib/ui/Layouts/HorizontalLayout.jsx',
		'lib/ui/Layouts/VerticalLayout.jsx',
		'lib/ui/Layouts/ContainedElement.jsx',
		'lib/ui/CSS/styles.css',
		'lib/ui/SingleComponents/LineEditPushButton/LineEditPushButton.jsx',
		'lib/ui/SingleComponents/LineEditComboBox/LineEditComboBox.jsx',
		'lib/ui/SingleComponents/ImageButton/ImageButton.jsx',
		'lib/ui/SingleComponents/RadioButtonGroup/RadioButtonGroup.jsx',
		'lib/ui/SingleComponents/LineEdit/LineEdit.jsx',
		'lib/ui/SingleComponents/Image/Image.jsx',
		'lib/ui/SingleComponents/TextAreaButton/TextAreaButton.jsx',
		'lib/ui/SingleComponents/PushButton/PushButton.jsx',
		'lib/ui/SingleComponents/TextAreaComboBox/TextAreaComboBox.jsx',
		'lib/ui/SingleComponents/ComboBox/ComboBox.jsx',
		'lib/ui/SingleComponents/CheckBoxList/CheckBoxList.jsx',
		'lib/ui/SingleComponents/CheckButton/CheckButton.jsx',
		'lib/Sidearea1/BubbleMenu.jsx',
		'lib/Sidearea1/ConfigArea.jsx',
		'lib/Sidearea1/SentBubbles.jsx',
		'lib/Sidearea1/SideArea1.jsx',
		'lib/Sidearea2/SideArea2.jsx',
		'lib/Sidearea2/ReceivedBubbles.jsx'
], ['client']);
	api.addFiles([
		'lib/Bubbles/RandomBub/RandMethod.js',
		'server/Methods.js',
		/*'client/templateSideArea1.html',
		'client/templateSideArea2.html',
		'client/SideArea1.js',
		'client/SideArea2.js',
		'sideAreaConfig.js',*/
		'lib/uiConstruction/AbsButton.jsx',
		'lib/uiConstruction/AbsBubble.jsx',
		'lib/uiConstruction/BubbleCreator.jsx',
		'lib/uiConstruction/AbsBubbleConfig.jsx',
		'lib/uiConstruction/BubbleDiscriminator.jsx',
		'lib/checks/CheckHandler.js',
		'lib/checks/Check.js',
		'lib/callerInitialization.js',
		'lib/database/BubbleDatabase.js',
		'lib/database/databaseInitialization.js',
		'lib/Bubbles/RandomBub/RandCheck.js',
		/*'lib/Bubbles/TranslationBub/TranslationBubble.jsx',
		'lib/Bubbles/TranslationBub/TranslationBubbleConfig.jsx',
		'lib/Bubbles/TranslationBub/TranslationBubbleCreationButton.jsx',
		'lib/Bubbles/RandomBub/RandBubbleConfig.jsx',
		'lib/Bubbles/RandomBub/RandBubble.jsx',
		'lib/Bubbles/RandomBub/RandBubbleCreationButton.jsx',
		'lib/Bubbles/bubbleDiscriminator.js',
		'lib/Bubbles/ListBub/ListBubble.jsx',
		'lib/Bubbles/ListBub/ListBubbleCreationButton.jsx',
		'lib/Bubbles/ListBub/ListBubbleConfig.jsx',
		'lib/Bubbles/Bubble.jsx',
		'lib/Bubbles/CurrencyBub/CurrencyBubble.jsx',
		'lib/Bubbles/CurrencyBub/CurrencyBubbleCreationButton.jsx',
		'lib/Bubbles/CurrencyBub/CurrencyBubbleConfig.jsx',
		'lib/Bubbles/PollBub/PollBubbleCreationButton.jsx',
		'lib/Bubbles/PollBub/PollBubble.jsx',
		'lib/Bubbles/PollBub/PollBubbleConfig.jsx',
		'lib/Bubbles/BubbleCreationButton.jsx',
		'lib/Bubbles/BubbleConfig.jsx',
		'lib/Bubbles/bubbleCreator.js',
		'lib/Bubbles/WeathBub/WeathBubbleConfig.jsx',
		'lib/Bubbles/WeathBub/WeathBubble.jsx',
		'lib/Bubbles/WeathBub/WeathBubbleCreationButton.jsx',
		'lib/ui/Layouts/HorizontalLayout.jsx',
		'lib/ui/Layouts/VerticalLayout.jsx',
		'lib/ui/Layouts/ContainedElement.jsx',*/
		//'lib/ui/CSS/styles.css',
		'lib/ui/SingleComponents/LineEditPushButton/LineEditPushButton.jsx',
		'lib/ui/SingleComponents/LineEditComboBox/LineEditComboBox.jsx',
		'lib/ui/SingleComponents/ImageButton/ImageButton.jsx',
		'lib/ui/SingleComponents/RadioButtonGroup/RadioButtonGroup.jsx',
		'lib/ui/SingleComponents/LineEdit/LineEdit.jsx',
		'lib/ui/SingleComponents/Image/Image.jsx',
		'lib/ui/SingleComponents/TextAreaButton/TextAreaButton.jsx',
		'lib/ui/SingleComponents/PushButton/PushButton.jsx',
		'lib/ui/SingleComponents/TextAreaComboBox/TextAreaComboBox.jsx',
		'lib/ui/SingleComponents/ComboBox/ComboBox.jsx',
		'lib/ui/SingleComponents/CheckBoxList/CheckBoxList.jsx',
		'lib/ui/SingleComponents/CheckButton/CheckButton.jsx',
		'lib/Bubbles/CurrencyBub/CurrencyMethod.js',
		'lib/Bubbles/PollBub/PollMethod.js',
		'server/main.js'],
	['server']);

	api.addFiles('lib/ui/CSS/bootstrap.css', 'client');
	api.addFiles('lib/ui/CSS/styles.css', 'client');
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('prova-react-01');

});

Npm.depends({
	'react':'15.6.1',
	'react-dom':'15.6.1',
	'bluebird':'3.5.0',
	'simpl-schema':'0.3.2',
	'react-addons-pure-render-mixin':'15.6.0',
	'money': '0.2.0',
	'request': '2.81.0',
	'request-promise': '4.2.1',
	'weather-js': '2.0.0'
});
