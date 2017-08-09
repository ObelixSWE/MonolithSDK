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
  api.use(['ecmascript','rocketchat:lib',
        'rocketchat:ui-message',
	'templating', 'blaze-html-templates', 'react-meteor-data',
	'maxharris9:classnames', 'twbs:bootstrap'
	]);
	api.addFiles([
		'client/templateSideArea1.html',
		'client/templateSideArea2.html',
		'client/SideArea2.js',
		'client/SideArea1.js',
		//'client/main.js',
		'sideAreaConfig.js',
		'imports/lib/uiConstruction/AbsButton.jsx',
		'imports/lib/uiConstruction/AbsBubble.jsx',
		'imports/lib/uiConstruction/BubbleCreator.jsx',
		'imports/lib/uiConstruction/AbsBubbleConfig.jsx',
		'imports/lib/uiConstruction/BubbleDiscriminator.jsx',
		'imports/lib/checks/CheckHandler.js',
		'imports/lib/checks/Check.js',
		'imports/lib/callerInitialization.js',
		'imports/lib/database/BubbleDatabase.js',
		'imports/lib/database/databaseInitialization.js',
		'imports/UI/Bubbles/TranslationBub/TranslationBubble.jsx',
		'imports/UI/Bubbles/TranslationBub/TranslationBubbleConfig.jsx',
		'imports/UI/Bubbles/TranslationBub/TranslationBubbleCreationButton.jsx',
		'imports/UI/Bubbles/RandomBub/RandBubbleConfig.jsx',
		'imports/UI/Bubbles/RandomBub/RandBubble.jsx',
		'imports/UI/Bubbles/RandomBub/RandBubbleCreationButton.jsx',
		'imports/UI/Bubbles/bubbleDiscriminator.js',
		'imports/UI/Bubbles/ListBub/ListBubble.jsx',
		'imports/UI/Bubbles/ListBub/ListBubbleCreationButton.jsx',
		'imports/UI/Bubbles/ListBub/ListBubbleConfig.jsx',
		'imports/UI/Bubbles/Bubble.jsx',
		'imports/UI/Bubbles/CurrencyBub/CurrencyBubble.jsx',
		'imports/UI/Bubbles/CurrencyBub/CurrencyBubbleCreationButton.jsx',
		'imports/UI/Bubbles/CurrencyBub/CurrencyBubbleConfig.jsx',
		'imports/UI/Bubbles/PollBub/PollBubbleCreationButton.jsx',
		'imports/UI/Bubbles/PollBub/PollBubble.jsx',
		'imports/UI/Bubbles/PollBub/PollBubbleConfig.jsx',
		'imports/UI/Bubbles/BubbleCreationButton.jsx',
		'imports/UI/Bubbles/BubbleConfig.jsx',
		'imports/UI/Bubbles/bubbleCreator.js',
		'imports/UI/Bubbles/WeathBub/WeathBubbleConfig.jsx',
		'imports/UI/Bubbles/WeathBub/WeathBubble.jsx',
		'imports/UI/Bubbles/WeathBub/WeathBubbleCreationButton.jsx',
		'imports/UI/Layouts/HorizontalLayout.jsx',
		'imports/UI/Layouts/VerticalLayout.jsx',
		'imports/UI/Layouts/ContainedElement.jsx',
		'imports/UI/CSS/styles.css',
		'imports/UI/SingleComponents/LineEditPushButton/LineEditPushButton.jsx',
		'imports/UI/SingleComponents/LineEditComboBox/LineEditComboBox.jsx',
		'imports/UI/SingleComponents/ImageButton/ImageButton.jsx',
		'imports/UI/SingleComponents/RadioButtonGroup/RadioButtonGroup.jsx',
		'imports/UI/SingleComponents/LineEdit/LineEdit.jsx',
		'imports/UI/SingleComponents/Image/Image.jsx',
		'imports/UI/SingleComponents/TextAreaButton/TextAreaButton.jsx',
		'imports/UI/SingleComponents/PushButton/PushButton.jsx',
		'imports/UI/SingleComponents/TextAreaComboBox/TextAreaComboBox.jsx',
		'imports/UI/SingleComponents/ComboBox/ComboBox.jsx',
		'imports/UI/SingleComponents/CheckBoxList/CheckBoxList.jsx',
		'imports/UI/SingleComponents/CheckButton/CheckButton.jsx'
	], ['client']);
	api.addFiles(['server/Publication.js',
		'server/Methods.js',
		/*'client/templateSideArea1.html',
		'client/templateSideArea2.html',
		'client/SideArea1.js',
		'client/SideArea2.js',
		'sideAreaConfig.js',*/
		'imports/lib/uiConstruction/AbsButton.jsx',
		'imports/lib/uiConstruction/AbsBubble.jsx',
		'imports/lib/uiConstruction/BubbleCreator.jsx',
		'imports/lib/uiConstruction/AbsBubbleConfig.jsx',
		'imports/lib/uiConstruction/BubbleDiscriminator.jsx',
		'imports/lib/checks/CheckHandler.js',
		'imports/lib/checks/Check.js',
		'imports/lib/callerInitialization.js',
		'imports/lib/database/BubbleDatabase.js',
		'imports/lib/database/databaseInitialization.js',
		'imports/UI/Bubbles/TranslationBub/TranslationBubble.jsx',
		'imports/UI/Bubbles/TranslationBub/TranslationBubbleConfig.jsx',
		'imports/UI/Bubbles/TranslationBub/TranslationBubbleCreationButton.jsx',
		'imports/UI/Bubbles/RandomBub/RandBubbleConfig.jsx',
		'imports/UI/Bubbles/RandomBub/RandBubble.jsx',
		'imports/UI/Bubbles/RandomBub/RandBubbleCreationButton.jsx',
		'imports/UI/Bubbles/bubbleDiscriminator.js',
		'imports/UI/Bubbles/ListBub/ListBubble.jsx',
		'imports/UI/Bubbles/ListBub/ListBubbleCreationButton.jsx',
		'imports/UI/Bubbles/ListBub/ListBubbleConfig.jsx',
		'imports/UI/Bubbles/Bubble.jsx',
		'imports/UI/Bubbles/CurrencyBub/CurrencyBubble.jsx',
		'imports/UI/Bubbles/CurrencyBub/CurrencyBubbleCreationButton.jsx',
		'imports/UI/Bubbles/CurrencyBub/CurrencyBubbleConfig.jsx',
		'imports/UI/Bubbles/PollBub/PollBubbleCreationButton.jsx',
		'imports/UI/Bubbles/PollBub/PollBubble.jsx',
		'imports/UI/Bubbles/PollBub/PollBubbleConfig.jsx',
		'imports/UI/Bubbles/BubbleCreationButton.jsx',
		'imports/UI/Bubbles/BubbleConfig.jsx',
		'imports/UI/Bubbles/bubbleCreator.js',
		'imports/UI/Bubbles/WeathBub/WeathBubbleConfig.jsx',
		'imports/UI/Bubbles/WeathBub/WeathBubble.jsx',
		'imports/UI/Bubbles/WeathBub/WeathBubbleCreationButton.jsx',
		'imports/UI/Layouts/HorizontalLayout.jsx',
		'imports/UI/Layouts/VerticalLayout.jsx',
		'imports/UI/Layouts/ContainedElement.jsx',
		//'imports/UI/CSS/styles.css',
		'imports/UI/SingleComponents/LineEditPushButton/LineEditPushButton.jsx',
		'imports/UI/SingleComponents/LineEditComboBox/LineEditComboBox.jsx',
		'imports/UI/SingleComponents/ImageButton/ImageButton.jsx',
		'imports/UI/SingleComponents/RadioButtonGroup/RadioButtonGroup.jsx',
		'imports/UI/SingleComponents/LineEdit/LineEdit.jsx',
		'imports/UI/SingleComponents/Image/Image.jsx',
		'imports/UI/SingleComponents/TextAreaButton/TextAreaButton.jsx',
		'imports/UI/SingleComponents/PushButton/PushButton.jsx',
		'imports/UI/SingleComponents/TextAreaComboBox/TextAreaComboBox.jsx',
		'imports/UI/SingleComponents/ComboBox/ComboBox.jsx',
		'imports/UI/SingleComponents/CheckBoxList/CheckBoxList.jsx',
		'imports/UI/SingleComponents/CheckButton/CheckButton.jsx'],
 		['server']);
		//api.addAssets('client/client/main.css', 'client');
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
	'simpl-schema':'0.3.2'
});
