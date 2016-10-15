import Ember from 'ember';

export default Ember.Service.extend({
  queue: [],
  bought: [],

  addToBasket(song) {
    this.get('queue').pushObject(song);
  },

  buy() {
    this.set('bought', this.get('queue'));
    this.set('queue', []);
  }
});
