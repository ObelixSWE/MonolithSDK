/**
 * Created by nick on 31/07/17.
 */

import SimpleSchema from 'simpl-schema';

export default class Check {
	constructor(checkName, schema) {
		if (checkName === undefined || schema === undefined) {
			throw Error('checkName or schema are not optional argument of Check.constructor.');
		}
		this.checkName = checkName;
		this.schema = new SimpleSchema(Object.assign(fixed, schema));
		this.context = this.schema.namedContext('myContext');
	}

	validate(dataObj) {
		dataObj /*ect*/ = Object.assign(dataObj);
		if (this.schema && this.context) {
			const validation = this.context.validate(dataObj);
			return {
				result: validation,
				errors: this.context.validationErrors()
			};
		} else {
			throw Error('Check.validate needs a schema to have been set. Check schema definition in constructor.');
		}
	}

	validateUpdate(dataObj) {
		if (this.schema && this.context) {
			const validation = this.context.validate(dataObj, { modifier: true });
			return {
				result: validation,
				errors: this.context.validationErrors()
			};
		} else {
			throw Error('Check.validate needs a schema to have been set. Check schema definition in constructor.');
		}
	}
}


const fixed = {
	createdAt:{
		type: Date,
		label: 'Creation date'
	},
	lastEdited:{
		type: Date,
		label: 'Last edit date'
	},
	bubbleType: {
		type: String,
		label: 'Type of bubble'
	},
	roomId: {
		type: String,
		label: 'Room\'s Id'
	},
	userId:{
		type: String,
		label: 'User\'s Id'
	}
};
/*
let fixedMochUp = {
    userId:'exampleid',
    roomId :'exampleid',
    bubbleType : 'exampleType',
    createdAt :  new Date(),
    lastEdited: new Date()
};
*/
