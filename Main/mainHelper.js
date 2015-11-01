if (Meteor.isClient) {
  // This code only runs on the client
  Template.main.helpers({
    
    message: function() {
        return Session.get("message");
    },
    error: function() {
        return Session.get("error");
    }
  });
}