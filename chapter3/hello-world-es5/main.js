function HelloWorldComponent() {
  this.name = 'Angular 2';
}

HelloWorldComponent.annotations = [
  new ng.Component({
    selector: 'hello-world',
    template: '<h1>Hello {{ name }}!</h1>'
  })
];

document.addEventListener('DOMContentLoaded', function () {
  ng.bootstrap(HelloWorldComponent);
});
