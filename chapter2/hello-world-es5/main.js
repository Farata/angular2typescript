// Component
(function(app) {
  app.HelloWorldComponent =
      ng.core.Component({
        selector: 'hello-world',
        template: '<h1>Hello {{name}}!</h1>'
      })
          .Class({
            constructor: function() {
              this.name = 'Angular 2';
            }
          });
})(window.app || (window.app = {}));

// Module
(function(app) {
  app.AppModule =
      ng.core.NgModule({
        imports: [ ng.platformBrowser.BrowserModule ],
        declarations: [ app.HelloWorldComponent ],
        bootstrap: [ app.HelloWorldComponent ]
      })
          .Class({
            constructor: function() {}
          });
})(window.app || (window.app = {}));

// App bootstrap
(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
        .platformBrowserDynamic()
        .bootstrapModule(app.AppModule);
  });
})(window.app || (window.app = {}));





/*function HelloWorldComponent() {
 this.name = 'Angular 2';
 }

 HelloWorldComponent.annotations = [
 new ng.core.Component({
 selector: 'hello-world',
 template: '<h1>Hello {{name}}!</h1>'
 })
 ];

 document.addEventListener('DOMContentLoaded', function () {
 ng.platformBrowserDynamic.bootstrap(HelloWorldComponent);
 });*/