if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    max: function() {
      var args = Array.prototype.slice.call(arguments);
      var max =  Math.max.apply(Math, args);
      return 'The maximum of ' + args.slice(0, -1).join(', ') + ' and ' + args.slice(-1) + ' is ' + max;
    }
  });
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
