import Ember from 'ember';

export default Ember.Controller.extend({
  basket: Ember.inject.service(),

  actions: {
    addToBasket(song) {
      this.get('basket').addToBasket(song);
    }
  }
});
