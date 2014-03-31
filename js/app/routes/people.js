App.PeopleRoute = Ember.Route.extend({
    model: function() {
        return App.Person.find();
    }
});
