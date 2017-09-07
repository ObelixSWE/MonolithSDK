/*
*  Name :  RandCheck.js
*  Location : /imports/UI/Bubbles
*  Author: Riccardo Saggese
*  Creation Data: 2017-06-27
*  Description: {randomSchema }
*/

import Check from '../../checks/Check';
import {CheckHandler} from '../../checks/CheckHandler.js';
import SimpleSchema from 'simpl-schema';

const randomSchema = {
	value:{
		label: 'Value to be converted',
		type: SimpleSchema.Integer
	},
	range:{
		label: 'Max of random number',
		type: SimpleSchema.Integer
	}
};




export const RandomCheck = new Check('random', randomSchema);
CheckHandler.registerCheck(RandomCheck);
