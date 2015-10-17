function HelloWorldComponent() {
  this.name = 'Angular';
}

HelloWorldComponent.annotations = [
  new ng.Component({
    selector: 'hello-world'
  }),
  new ng.View({
    template: '<h1>Hello {{ name }}!</h1>'
  })
];

document.addEventListener('DOMContentLoaded', function () {
  ng.bootstrap(HelloWorldComponent);
});
