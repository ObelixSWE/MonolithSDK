import { Template } from 'meteor/templating';
//import Template from 'meteor/react-template-helper';
import './templateSideArea1.html';


import React from 'react';
import { render as reactRender } from 'react-dom';
import { renderToString as reactRenderToString } from 'react-dom/server';
import { Mongo } from 'meteor/mongo';
import VerticalLayout from '../imports/UI/Layouts/VerticalLayout.jsx';
import PushButton from '../imports/UI/SingleComponents/PushButton/PushButton.jsx'
import HorizontalLayout from '../imports/UI/Layouts/HorizontalLayout.jsx';
import PollBubbleCreationButton from '../imports/UI/Bubbles/PollBub/PollBubbleCreationButton.jsx';
import PollBubbleConfig from '../imports/UI/Bubbles/PollBub/PollBubbleConfig.jsx';
import PollBubble from '../imports/UI/Bubbles/PollBub/PollBubble.jsx';
import RandBubbleCreationButton from '../imports/UI/Bubbles/RandomBub/RandBubbleCreationButton.jsx';
import RandBubbleConfig from '../imports/UI/Bubbles/RandomBub/RandBubbleConfig.jsx';
import RandBubble from '../imports/UI/Bubbles/RandomBub/RandBubble.jsx';
import ListBubbleCreationButton from '../imports/UI/Bubbles/ListBub/ListBubbleCreationButton.jsx';
import ListBubbleConfig from '../imports/UI/Bubbles/ListBub/ListBubbleConfig.jsx';
import ListBubble from '../imports/UI/Bubbles/ListBub/ListBubble.jsx';


import Sidearea1Container from '../imports/lib/Sidearea1/SideArea1.jsx';
import {BubbleCollection} from '../imports/lib/database/databaseInitialization.js';


/*
class Sidearea1Container extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return <p>hello</p>;
	}
}*/

Template.templateSideArea1.helpers({
	Sidearea1Container() {
		return Sidearea1Container;
	}
});



/*
import {mount, withOptions} from 'react-mounter';
const mount1 = withOptions({
    rootId: 'sidearea1',
}, mount);


*/


/*
helpers({
	Sidearea1Container() {
		return Sidearea1Container;
	}
});
*/


/*
export class SideArea1 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      buttons : [],
      menu : (<div></div>),
	  bolla: [],
      }
    this.displayMenu=this.displayMenu.bind(this);
    this.send=this.send.bind(this);
		this.poll=this.poll.bind(this);
		this.test=this.test.bind(this);
    this.state.buttons.push(<RandBubbleCreationButton generate={this.displayMenu}/>);
		this.state.buttons.push(<PollBubbleCreationButton generate={this.displayMenu}/>);
		this.state.buttons.push(<ListBubbleCreationButton generate={this.displayMenu}/>);
  }

  send(n){
	  let m=<RandBubble nMax={n}/>;
	  //this.state.bolla.push(m);
		let a=this.state.bolla;
		a.push(m);
		this.setState({bolla:a});
  }

  poll(t,o,n){
	  let m=<PollBubble title={t} op={o} num={n}/>;
	  //this.state.bolla.push(m);
		let a=this.state.bolla;
		a.push(m);
		this.setState({bolla:a});
  }

	displayMenu(s){
		let m;
		if(s=='rand')
			m=<RandBubbleConfig send={this.send}/>;
		if(s=='poll')
			m=<PollBubbleConfig send={this.poll}/>;
		m=<ListBubbleConfig getList={this.test}/>;
		this.setState({menu:m});
  }

	test(m){
		let s=<ListBubble stat={m}/>;
		let a=this.state.bolla;
		a.push(s);
		this.setState({bolla:a});
	}
  render() {

    return (
		<VerticalLayout>
			<VerticalLayout>
					<h1> Menù </h1>
		    	 {this.state.buttons}
		    </VerticalLayout>
		    <VerticalLayout>
				<h1> Configurazione Bolla </h1>
				<div>{this.state.menu}</div>
		    </VerticalLayout>
			<VerticalLayout>
				<h1>Bolle Inviate</h1>
				<div>{this.state.bolla}</div>
		    </VerticalLayout>
		</VerticalLayout>
    );
  }


}
*/

/*
export default function renderMyStuff() {

  if (typeof document === 'undefined') {
    return reactRenderToString(<Sidearea1Container />);
  } else {
//, document.getElementById('sidearea1')
  	reactRender.render(Sidearea1Container);
  }
}
*/
