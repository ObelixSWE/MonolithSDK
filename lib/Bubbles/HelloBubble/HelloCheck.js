/*
*  Name :  RandCheck.js
*  Location : /imports/UI/Bubbles
*  Author: Emanuele Crespan
*  Creation Data: 2017-09-05
*  Description: {helloSchema }
*/

import Check from '../../checks/Check';
import {CheckHandler} from '../../checks/CheckHandler.js';
import SimpleSchema from 'simpl-schema';

const helloSchema = {
	value:{
		label: 'Value to be displayed',
		type: SimpleSchema.String
	}
};




export const RandomCheck = new Check('hello', helloSchema);
CheckHandler.registerCheck(HelloCheck);
