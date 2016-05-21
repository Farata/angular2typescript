System.config({
  transpiler: 'typescript',
  typescriptOptions: {emitDecoratorMetadata: true},
  map: {
    'app'     : 'src',
    'rxjs'    : 'node_modules/rxjs',
    '@angular': 'node_modules/@angular'
  },
  packages: {
    'app'                              : {main: '01_basic-form-api', defaultExtension: 'ts'},
    'rxjs'                             : {main: 'index'},
    '@angular/core'                    : {main: 'index'},
    '@angular/common'                  : {main: 'index'},
    '@angular/compiler'                : {main: 'index'},
    '@angular/platform-browser'        : {main: 'index'},
    '@angular/platform-browser-dynamic': {main: 'index'}
  }
});
