import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        name: 'Barbie Girl',
        img: 'http://three.fonestarz.co.uk//cache/content/t/00218829_240x240_8_1_FFFFFF_10_0.jpg',
        url: 'http://mobile.three.co.uk/962//v5-isf/music/archive/purchase/218829/0/confirm?sid=1610131404121497&st=barbie+girl&b=%2fv5-isf%2fmusic%2fsearch%3fsid%3d1610131404121497%26st%3dbarbie%2bgirl%26x%3d0%26y%3d0%26cti%3d2%26cti%3d3%26cti%3d8%26cti%3d12'
      }, {
        name: 'Dancing On My Own',
        img: 'http://three.fonestarz.co.uk//cache/content/t/04160200_240x240_8_1_FFFFFF_10_0.jpg',
        url: 'http://mobile.three.co.uk/962//v5-isf/music/Purchase/202/123876/2881859/confirm?sid=1610152101047941&b=%2fv5-isf%2fmusic%2f'
      }, {
        name: 'What do you mean?',
        img: 'http://three.fonestarz.co.uk//cache/content/t/03306882_240x240_8_1_FFFFFF_10_0.jpg',
        url: 'http://mobile.three.co.uk/962//v5-isf/music/archive/purchase/3306882/0/confirm?sid=1610152102414309&st=Justin+Bieber'
      }
    ];
  }
});
