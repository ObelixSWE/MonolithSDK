import {Meteor} from 'meteor/meteor';

/*
async function echo(text) {
	return text;
}
*/
Meteor.methods({
	async CurrencyConvertor(data) {
		console.log('inizia curr method');
		const startValue = parseFloat(data.value);
		delete data.value;
		const reqProm = require('request-promise');
		const money = require('money');
		const options = {
			uri: 'https://openexchangerates.org/api/latest.json?app_id=c4a2cfd544d94d71bc3236f44363381b',
			headers: {
				'User-Agent': 'Request-Promise'
			},
			json: true
		};
		const finalValue = async() => {
			try {
				const exchanges = await reqProm(options);
				money.rates = exchanges.rates;
				money.base = exchanges.base;
				const Value = money.convert(startValue, {from: data.curr_in, to: data.curr_out});
				console.log(Value); // viene ritornato troppo tardi
				return Value;
			} catch (e) {
				console.log(e);
				console.log('----------------------------------------------------------------');
				throw new Meteor.Error('convertion-api-fails', 'error while using money.js');
			}
			/*
			exchanges => {
					money.rates = exchanges.rates;
					money.base = exchanges.base;
					finalValue = money.convert(startValue, {from: data.curr_in, to: data.curr_out});
					console.log(finalValue); // viene ritornato troppo tardi
					return finalValue;
				},
				err => {
					// API call failed...
					console.log(err);
					throw new Meteor.Error('convertion-api-fails', 'error while using money.js');
				}
			);*/
		};
		let promisedOfResult = await finalValue();
		promisedOfResult = Math.round(promisedOfResult * 100)/100;
		data = Object.assign(data,
			{
				value_in: startValue,
				value_out: promisedOfResult
			});
		console.log(data);
		return data; //Object.assign(data, {});
	}
});

/*

curr_in: this.state.curr_in,
                curr_out: this.state.curr_out,
                value: this.state.value


 */
