import Reflux from 'reflux';
import $ from 'jquery';
import PeopleActions from '../actions/PeopleActions.js';

let PeopleStore = Reflux.createStore({
	listenables:[PeopleActions],
	fetchPeople: function(){
		let self = this
		$.ajax({
			url: 'https://randomuser.me/api/',
  			dataType: 'json'
		})
		.done(function(data){
			let people = data.results[0];
			self.trigger(people)
		});
	}
});

export default PeopleStore