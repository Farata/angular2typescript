This is a repository for code samples for the upcoming book by Yakov Fain and Anton Moiseev <a href="https://manning.com/books/angular-2-development-with-typescript">Angular 2 Development with TypeScript</a>. 

Most of the code samples were upgraded to Angular 2.0 Final, and some of them are still in RC.6. To upgrade them to Final, remove the -rc6 suffix from all Angular packages in package.json. Here's how package.json in Angular 2.0 Final apps could look like:

```
 "dependencies": {
    "@angular/common": "2.0.0",
    "@angular/compiler": "2.0.0",
    "@angular/core": "2.0.0",
    "@angular/forms": "2.0.0",
    "@angular/http": "2.0.0",
    "@angular/platform-browser": "2.0.0",
    "@angular/platform-browser-dynamic": "2.0.0",
    "@angular/router": "3.0.0",
    "core-js": "^2.4.0",
    "rxjs": "5.0.0-beta.12",
    "systemjs": "0.19.37",
    "zone.js": "0.6.21"
  },
```
**IMPORTANT:** If you already have an older version of Node.js installed, upgrade it to the current one to avoid errors during npm instal.

The video with a high-level code review of a sample Online Auction application that we gradually develop in the book is located at https://youtu.be/I809tajbVk4.

Note the changes in the SystemJS config object in the angular-seed project in Chapter 2. Now we use minimized Angular bundles to lower the size of the app and the number of network requests during the app bootstrap.

With the release of TypeScript 2.0, there is no need to use the Typings tool for downloading *.d.ts files. We're starting updating the code example to use @types and install the *.d.ts files with npm, e.g. 
npm i @types/es6-shim --save

In chapter 10 we upgraded the code samples to use Webpack 2.1.0-beta.21. Although the newer beta.24 is available, it introduced some breaking changes so we don't use it.

Watch the video from one of our recent online trainings:
https://www.youtube.com/watch?v=47Gn-jgb0FI&feature=youtu.be
It'll help you in getting started while reading Chapter 2.

If you're interested in joining one of our online or in-class trainings, check the schedule at http://yakovfain.com. 
