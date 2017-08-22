/*
*  Name :   ListCheck.jsx
*  Location : /imports/UI/Bubbles/ListBub
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {currSchema}
*/

import Check from '../../checks/Check';
import {CheckHandler} from '../../checks/CheckHandler.js';


const currSchema = {
	curr_in:{
		label: 'Currency of input',
		type: String
	},
	curr_out:{
		label: 'Currency of output',
		type: String
	},
	value:{
		label: 'Value to be converted',
		type: Number
	}
};




export const ListCheck = new Check('list', currSchema);
CheckHandler.registerCheck(ListCheck);
