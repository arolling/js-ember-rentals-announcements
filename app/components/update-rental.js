import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
    update(rental) {
      var params = {
        owner: this.get('owner'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        cost: parseInt(this.get('cost')),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
        date_added: new Date(this.get('date_added'))
      };
      this.set('owner', '');
      this.set('type', '');
      this.set('image', '');
      this.set('bedrooms', '');
      this.set('cost', '');
      this.set('latitude', '');
      this.set('longitude', '');
      this.set('updateRentalForm', false);
      this.sendAction('update', rental, params);
    }
  }

});
