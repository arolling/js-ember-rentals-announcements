import Ember from 'ember';

export default Ember.Component.extend({
  isBodyShowing: false,
  actions:{
    showBody() {

      if(this.isBodyShowing){
      this.set('isBodyShowing', false);
    } else {
      this.set('isBodyShowing', true);
    }
  }
  }
});
