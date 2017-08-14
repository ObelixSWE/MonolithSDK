/*
*  Name :   BubbleConfig.jsx
*  Location : /impor../../UI/Bubbles
*  Author: Nicolò Rigato
*  Creation Data: 2017-06-27
*  Description: {Breve descrizione del file}
*  ----------------------------------------------
*  History :
*  Version: {Versione del file}
*  Update data: {Data ultima modifica}
*  Description: {descrizione della modifica}
*  Author: {Autore della modifica}
*/

import React, { Component } from 'react'
import VerticalLayout from "../../ui/Layouts/VerticalLayout";
import ComboBox from "../../ui/SingleComponents/ComboBox/ComboBox";
import LineEdit from "../../ui/SingleComponents/LineEdit/LineEdit";
import PushButton from "../../ui/SingleComponents/PushButton/PushButton";
import AbsBubbleConfig from "../../uiConstruction/AbsBubbleConfig";
import CurrencyDb from "./CurrencyDb.js";

export default class CurrencyBubbleConfig extends AbsBubbleConfig{
    constructor(props){
        super(props);
        this.state={
            curr_in:this.props.curr[0],
            curr_out:this.props.curr[0],
            value:0,
        }
        this.getValue=this.getValue.bind(this);
        this.getCurrIn=this.getCurrIn.bind(this);
        this.getCurrOut=this.getCurrOut.bind(this);
        this.send=this.send.bind(this);
        this.curr=['AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BRL','BSD','BTC','BTN','BWP','BYN','BZD','CAD','CDF','CHF','CLF','CLP','CNH','CNY','COP','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','FKP','GBP','GEL','GGP','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','IMP','INR','IQD','IRR','ISK','JEP','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','SSP','STD','SVC','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','USD','UYU','UZS','VEF','VND','VUV','WST','XAF','XAG','XAU','XCD','XDR','XOF','XPD','XPF','XPT','YER','ZAR','ZMW','ZWL'];
        this.db=new CurrencyDb;
    }

    getCurrOut(text){
        this.setState({curr_out:text})
    }

    getCurrIn(text){
        this.setState({curr_in:text})
    }

    getValue(text){
        this.setState({value:text});
        //this.props.send(text,this.state.curr_in,this.state.curr_out);

    }

    send(id){
        let prom=this.db.insert({curr_in: this.state.curr_in,
                                curr_out: this.state.curr_out,
                                value: this.state.value});
        this.props.closeMenu();
    }

    render(){

      return(
            <VerticalLayout>
                <span className="propertyLabel">Scegli la valuta base</span>
                <ComboBox options={this.curr} getSelection={this.getCurrIn}/><br/>
                <span className="propertyLabel">Scegli la valuta finale</span>
                <ComboBox options={this.curr} getSelection={this.getCurrOut}/><br/>
                <span className="propertyLabel">Inserisci il valore:</span>
                <LineEdit updateState={getValue}/>

            </VerticalLayout>
        );
    }
}


//    <PushButton buttonName="Send" handleClick={this.send}/>

