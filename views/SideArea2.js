import { Template } from 'meteor/templating';
import './templateSideArea2.html';


import React from 'react';
import { render as reactRender } from 'react-dom';
import { renderToString as reactRenderToString } from 'react-dom/server';
import { Mongo } from 'meteor/mongo';
import VerticalLayout from '../imports/UI/Layouts/VerticalLayout.jsx';

Template.templateSideArea2.onRendered(function() {
	renderMyStuff();
	console.log('rendering!');
});




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


export default function renderMyStuff() {
  if (typeof document === 'undefined') {
    return reactRenderToString(<SideArea2 />)
  } else {
    reactRender(<SideArea2 />, document.getElementById('sidearea2'))
  }
}
