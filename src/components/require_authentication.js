import React, {Component} from 'react';

import {connect} from 'react-redux';


//this is a hoc as we can see the Authentication class is wrappaed inside a 
//function which is then exported
//this function is then invoked from index.js
//where a component(Resources) is passed as an 
//argument
//ComposedComponent which is the parameter here
//gets Respurces component

export default function(ComposedComponent){

	class Authentication extends Component{
		static contextTypes = {
			router:React.PropTypes.object
		}

		componentWillMount(){
			//console.log('auth:',this.props.authenticated)
			if(!this.props.authenticated){
			this.context.router.push('/');	
			}
			
		}

		//componentWillUpdate is called whnever a component is 
		//about to be handled a new state of props
		componentWillUpdate(nextProps){
			console.log('nextProps:',nextProps);
			if(!nextProps.authenticated){
				this.context.router.push('/')
			}
		}
		render(){
			
			return <ComposedComponent {...this.props} />
		}
	}



	function mapStateToProps(state){
		return {authenticated:state.authenticated};
	}
	return connect(mapStateToProps)(Authentication);

}



