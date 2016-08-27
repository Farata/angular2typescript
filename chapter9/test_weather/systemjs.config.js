System.config({
  transpiler: 'typescript',
  typescriptOptions: {emitDecoratorMetadata: true},
  map: {
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs'
  },
  meta: {
    '@angular/*': {'format': 'cjs'}
  },
  packages: {
    'app'                              : {main: 'main', defaultExtension: 'ts'},
    'rxjs'                             : {main: 'Rx'},
    '@angular/core'                    : {main: 'index'},
    '@angular/common'                  : {main: 'index'},
    '@angular/compiler'                : {main: 'index'},
    '@angular/forms'                   : {main: 'index'},
    '@angular/http'                    : {main: 'index'},
    '@angular/platform-browser'        : {main: 'index'},
    '@angular/platform-browser-dynamic': {main: 'index'},
    '@angular/router'                  : {main: 'index'}
  }
});
