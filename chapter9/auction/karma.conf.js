module.exports = function (config) {
  config.set({
    browsers: ['Chrome', 'Firefox'],
    frameworks: ['jasmine'],
    reporters: ['dots'],
    singleRun: true,
    files: [
      // Paths loaded by Karma.
      'node_modules/typescript/lib/typescript.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',

      'karma-system-config.js',
      'karma-test-runner.js',

      // Paths loaded via module imports.
      {pattern: 'node_modules/@angular/**/*.js',     included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},
      {pattern: 'node_modules/rxjs/**/*.js',         included: false, watched: false},
      {pattern: 'node_modules/rxjs/**/*.js.map',     included: false, watched: false},
      {pattern: 'client/app/**/*.ts',                included: false, watched: true},
      {pattern: 'client/app/**/*.html',              included: false, watched: true}
    ],
    proxies: {
      // Required for component assets fetched by Angular's compiler
      // (e.g. styleUrls and templateUrl).
      '/app/': '/base/client/app/'
    },
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ]
  })
};
