if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter() {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button'() {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    max(...args) {
      const max = Math.max(...args);
      return `The maximum of ${args.slice(0, -1).join(', ')} and ${args.slice(-1)} is ${max}`;
    }
  });
  Meteor.startup(() => {
    // code to run on server at startup
  });
}
