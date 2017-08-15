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




export const WeatherCheck = new Check('weather', currSchema);
CheckHandler.registerCheck(WeatherCheck);
