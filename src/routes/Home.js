import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';
import PeopleFrame from '../components/PeopleFrame.js';
import PeopleActions from '../actions/PeopleActions.js';
import PeopleStore from '../stores/PeopleStore.js';

@ReactMixin.decorate(Reflux.connect(PeopleStore, 'people'))

export default class Home extends React.Component{
	constructor(){
		super();
	}
	
	componentDidMount(){
		PeopleActions.fetchPeople();
	}

	render(){
		if(this.state.people != null){
				return(
					<PeopleFrame people={this.state.people} />
					)
			}else{
				return(<h1>Loading</h1>)
			}
	}
}