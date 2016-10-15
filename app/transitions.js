export default function() {
  this.transition(
    this.toRoute('checkout'),
    this.use('toLeft')
  );
  this.transition(
    this.toRoute('gallery'),
    this.use('toRight')
  );
}
