import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow(){
      this.set('addNewCity', true);
    },

    newCity() {
      var params = {
        country: this.get('country'),
        name: this.get('name')
      };
      this.set('addNewCity', false);
      this.sendAction('saveCity', params);
    }
  }
});
