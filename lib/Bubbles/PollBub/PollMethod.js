import {Meteor} from 'meteor/meteor';
import {aBubbleCollection} from '../../database/databaseInitialization.js';



Meteor.methods({
	BubblePollUpdate(bubbleId, data) {
		const pr = aBubbleCollection.updateAsync({_id: bubbleId, 'options.id': data.id_ans}, {$inc: {'options.$.votes': 1}});
		pr.then(
			(a) => { console.log('correct update'); },
			(a) => { console.log('incorrect update'); throw new Meteor.Error('poll-update', 'Vote update failed part 1.'); }
		);
		const pr1 = aBubbleCollection.updateAsync({_id: bubbleId }, {$push: {'voted': data.user}});
		pr1.then(
			(a) => { console.log('correct update'); },
			(a) => { console.log('incorrect update'); throw new Meteor.Error('poll-update', 'Vote update failed part 2.'); }
		);
	}
});

/*
{'a':1,
   b:[{_id:341432,
       c:2
      },
      {_id:341445,
       c:3
      }]};

--------------------------------------------------------------------------------------------------------
db.BubbleCollection.update({_id: "8WnKFpAXjshuEcZKj", 'options.id': 1}, {$inc: {'options.$.votes': 1}});
--------------------------------------------------------------------------------------------------------

To update an element in an array field, you can use the positional $ operator

For example, the following js increments c from 3 to 4 for _id 341445:

db.collection.update({a:1, "b._id":341445} , {$inc:{"b.$.c":1}})
 */
