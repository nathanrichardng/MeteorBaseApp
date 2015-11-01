Router.route('/friendRequests', {
	waitOn: function () {
	    return Meteor.subscribe('users');
	}
});