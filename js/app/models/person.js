App.Person = Ember.Object.extend({
    firstName: '',
    lastName: '',
    fullName: function() {
        var firstName = this.get('firstName');
        var lastName = this.get('lastName');
        return firstName + ' ' + lastName;
    }.property('firstName', 'lastName')
});

App.Person.reopenClass({
    people: [],
    add: function(hash) {
        var person = App.Person.create(hash);
        this.people.pushObject(person);
    },
    remove: function(person) {
        this.people.removeObject(person);
    },
    find: function() {
        var self = this;
        $.getJSON('/api/people', function(response) {
            response.forEach(function(hash) {
                var person = App.Person.create(hash);
                Ember.run(self.people, self.people.pushObject, person);
            });
        }, this);
        return this.people;
    }
});
