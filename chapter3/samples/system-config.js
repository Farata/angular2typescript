System.config({
  transpiler: 'typescript',
  typescriptOptions: {emitDecoratorMetadata: true},
  map: {
    'app'                              : 'src',
    'rxjs'                             : 'node_modules/rxjs',
    '@angular/core'                    : 'node_modules/@angular/core',
    '@angular/common'                  : 'node_modules/@angular/common',
    '@angular/compiler'                : 'node_modules/@angular/compiler',
    '@angular/router'                  : 'node_modules/@angular/router',
    '@angular/platform-browser'        : 'node_modules/@angular/platform-browser',
    '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic'
  },
  packages: {
    'app'                              : {main: 'main-matrix-params', defaultExtension: 'ts'},
    'rxjs'                             : {main: 'index'},
    '@angular/core'                    : {main: 'index'},
    '@angular/common'                  : {main: 'index'},
    '@angular/compiler'                : {main: 'index'},
    '@angular/router'                  : {main: 'index'},
    '@angular/platform-browser'        : {main: 'index'},
    '@angular/platform-browser-dynamic': {main: 'index'}
  }
});
