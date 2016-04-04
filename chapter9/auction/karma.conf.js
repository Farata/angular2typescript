module.exports = function (config) {
  config.set({
    basePath: 'client',
    browsers: ['Chrome', 'Firefox'],
    frameworks: ['jasmine'],
    reporters: ['dots'],
    singleRun: true,
    files: [
      // Paths loaded by Karma.
      {pattern: '../node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: false},
      {pattern: '../node_modules/typescript/lib/typescript.js', included: true, watched: false},
      {pattern: '../node_modules/systemjs/dist/system.src.js', included: true, watched: false},
      {pattern: '../node_modules/rxjs/bundles/Rx.js', included: true, watched: false},
      {pattern: '../node_modules/angular2/bundles/angular2.dev.js', included: true, watched: false},
      {pattern: '../node_modules/angular2/bundles/router.dev.js', included: true, watched: false},
      {pattern: '../node_modules/angular2/bundles/http.dev.js', included: true, watched: false},
      {pattern: '../node_modules/angular2/bundles/testing.dev.js', included: true, watched: false},
      {pattern: '../karma-test-runner.js', included: true, watched: false},
      {pattern: 'config.js', included: true, watched: false},
      // Paths loaded via module imports.
      {pattern: 'app/**/*.ts', included: false, watched: true},
      {pattern: 'app/**/*.html', included: false, watched: true}
    ],
    proxies: {
      // Required for component assets fetched by Angular's compiler
      // (e.g. styleUrls and templateUrl).
      '/app/': '/base/app/'
    },
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ]
  })
};