import { Meteor } from 'meteor/meteor';
import {BubbleCollection} from "../imports/lib/database/databaseInitialization.js";


Meteor.publish(
    'BubblesPublication',
    function () {
        return BubbleCollection.find({});
    }
    );
