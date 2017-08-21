
import React from 'react';

export default class ConfigArea extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
	    if(this.props.menu) {
            return (
                <div className="config-area-menu bubbleborder bg-warning">
                    {this.props.menu}
                </div>
            );
        }
        else{
	        return null;
        }
    }
}
