// This file is used by the html files sent by the Node server
System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
    map: {
        'app' : 'client/app',
        'rxjs': 'node_modules/rxjs',
        '@angular'                         : 'node_modules/@angular'
      },
      packages: {
        'app'                              : {main: 'custom_observable_service_subscriber.ts', defaultExtension: 'ts'},
        'rxjs'                             : {main: 'index.js'},
        '@angular/core'                    : {main: 'index.js'},
        '@angular/common'                  : {main: 'index.js'},
        '@angular/compiler'                : {main: 'index.js'},
        '@angular/router'                  : {main: 'index.js'},
        '@angular/platform-browser'        : {main: 'index.js'},
        '@angular/platform-browser-dynamic': {main: 'index.js'},
        '@angular/http'                    : {main: 'index.js'}
      }
});
