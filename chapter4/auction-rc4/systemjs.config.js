System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
    map: {
        '@angular': 'node_modules/@angular'
    },
    paths: {
        'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
    },
    meta: {
        '@angular/*': {'format': 'cjs'}
    },
    packages: {
        'app'                              : {main: 'main.ts', defaultExtension: 'ts'},
        '@angular/core'                    : {main: 'core.umd.min.js'},
        '@angular/common'                  : {main: 'common.umd.min.js'},
        '@angular/compiler'                : {main: 'compiler.umd.min.js'},
        '@angular/forms'                   : {main: 'forms.umd.min.js'},
        '@angular/http'                    : {main: 'http.umd.min.js'},
        '@angular/platform-browser'        : {main: 'platform-browser.umd.min.js'},
        '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'},
        '@angular/router'                  : {main: 'router.umd.min.js'}
    }
});


/*
System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
    map: {
        'app' : 'app',
        'rxjs': 'node_modules/rxjs',
        '@angular'                         : 'node_modules/@angular'
      },
      packages: {
        'app'                              : {main: 'main', defaultExtension: 'ts'},
        'rxjs'                             : {main: 'index.js'},
        '@angular/core'                    : {main: 'index.js'},
        '@angular/common'                  : {main: 'index.js'},
        '@angular/compiler'                : {main: 'index.js'},
        '@angular/router'                  : {main: 'index.js'},
        '@angular/platform-browser'        : {main: 'index.js'},
        '@angular/platform-browser-dynamic': {main: 'index.js'}
      }
});
*/
