import { Template } from 'meteor/templating';
import './templateSideArea2.html';

import Sidearea2Container from '../lib/Sidearea2/SideArea2.jsx';


Template.templateSideArea2.helpers({
	Sidearea2Container() {
		return Sidearea2Container;
	}
});
