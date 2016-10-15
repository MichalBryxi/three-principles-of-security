import Ember from 'ember';

export default Ember.Controller.extend({
  basket: Ember.inject.service(),
  unitPrice: 1.29,
  termsAgreed: false,
  buttonEnabled: Ember.computed.not('termsAgreed'),

  sum: Ember.computed('basket.queue.[]', function () {
    return this.get('basket.queue.length') * this.get('unitPrice');
  }),

  actions: {
    buy() {
      this.get('basket').buy();
    }
  }
});
