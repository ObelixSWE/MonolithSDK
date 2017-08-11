import { Template } from "meteor/templating";
import "./templateSideArea2.html";


import React from "react";
import { render as reactRender } from "react-dom";
import { renderToString as reactRenderToString } from "react-dom/server";
import { Mongo } from "meteor/mongo";
import VerticalLayout from "../imports/UI/Layouts/VerticalLayout.jsx";

import Sidearea2Container from "../imports/lib/Sidearea2/SideArea2.jsx";

/*
import {mount, withOptions} from 'react-mounter';
const mount2 = withOptions({
    rootId: 'sidearea2',
    rootProps: {'className': 'sidearea2'}
}, mount);


Template.templateSideArea2.onRendered(function() {
  //console.log('about to render!');
  //renderMyStuff();
  mount1(Sidearea2Container)
  console.log('rendering!');
});
*/


/*
Template.templateSideArea2.onRendered(function() {
	renderMyStuff();
	console.log("rendering!");
});

*/



/*
export class SideArea2 extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
	<div>afjshgfhs</div>
    );
  }
}
*/


/*
export default function renderMyStuff() {
  if (typeof document === "undefined") {
    return reactRenderToString(<Sidearea2Container />)
  } else {
    //reactRender(<Sidearea2Container />, document.getElementById("sidearea2"))
	ReactLayout.render(Sidearea2Container);
  }
}
*/