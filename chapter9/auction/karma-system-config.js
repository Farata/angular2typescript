System.config({
  baseURL: 'base',
  transpiler: 'typescript',
  typescriptOptions: {emitDecoratorMetadata: true},
  map: {
    'app'     : 'client/app',
    'rxjs'    : 'node_modules/rxjs',
    '@angular': 'node_modules/@angular'
  },
  packages: {
    'app'                              : {main: 'main', defaultExtension: 'ts'},
    'rxjs'                             : {main: 'index'},
    '@angular/core'                    : {main: 'index'},
    '@angular/common'                  : {main: 'index'},
    '@angular/compiler'                : {main: 'index'},
    '@angular/platform-browser'        : {main: 'index'},
    '@angular/platform-browser-dynamic': {main: 'index'},
    '@angular/http'                    : {main: 'index'},
    '@angular/router'                  : {main: 'index'},
    '@angular/forms'                   : {main: 'index'}
  }
});
