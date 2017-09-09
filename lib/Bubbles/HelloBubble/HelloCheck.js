/*
*  Name :  RandCheck.js
*  Location : /imports/UI/Bubbles
*  Author: Emanuele Crespan
*  Creation Data: 2017-09-05
*  Description: {helloSchema }
*/

import Check from '../../checks/Check';
import {CheckHandler} from '../../checks/CheckHandler.js';

const helloSchema = {
	value:{
		type: String
	}
};




export const HelloCheck = new Check('hello', helloSchema);
CheckHandler.registerCheck(HelloCheck);
