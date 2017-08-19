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
