App.PeopleController = Ember.ArrayController.extend({
    actions: {
        addPerson: function() {
            var person = {
                firstName: this.get('firstName'),
                lastName: this.get('lastName')
            };
            App.Person.add(person);
        },
        deletePerson: function(person) {
            App.Person.remove(person);
        }
    }
});
