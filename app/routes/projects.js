import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [
			{
				title: 'pairBooked',
				link: 'http://pairbooked.herokuapp.com',
				preview: '',
				github: '',
				description: "The final project at Dev Bootcamp. It schedules pair-programming sessions for students in the off-site portion of the program. We created it over the course of a week in a team of three."
			},
			{
				title: 'Somali Youth and Family Club Website',
				link: 'http://www.syouthclub.org',
				preview: '',
				github: '',
				description: "A project for Seattle GiveCamp. We worked with the Somali Youth and Family Club to update their website and make it easier to access services. We had a team of five, with two web developers including me."
			},
			{
				title: 'pairbooked',
				link: '',
				preview: '',
				github: '',
				description: ""
			},
		];
	}
});
