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
        'app'                              : {main: 'main', defaultExtension: 'ts'},
       '@angular/core'                    : {main: 'core.umd.min.js'},
       '@angular/common'                  : {main: 'common.umd.min.js'},
       '@angular/compiler'                : {main: 'compiler.umd.min.js'},
       '@angular/platform-browser'        : {main: 'platform-browser.umd.min.js'},
       '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'}
    }
});