This is a repository for code samples for the upcoming book by Yakov Fain and Anton Moiseev <a href="https://manning.com/books/angular-2-development-with-typescript">Angular 2 Development with TypeScript</a>. 

All code samples were upgraded to Angular 2.0 Final

**IMPORTANT:** If you already have an older version of Node.js installed, upgrade it to the current one to avoid errors during npm instal.

The video with a high-level code review of a sample Online Auction application that we gradually develop in the book is located at https://youtu.be/I809tajbVk4.

Note the changes in the SystemJS config object in the angular-seed project in Chapter 2. Now we use minimized Angular bundles to lower the size of the app and the number of network requests during the app bootstrap.

With the release of TypeScript 2.0, there is no need to use the Typings tool for downloading *.d.ts files. We're starting updating the code example to use @types and install the *.d.ts files with npm, e.g. 
npm i @types/es6-shim --save

Watch the video from one of our recent online trainings:
https://www.youtube.com/watch?v=47Gn-jgb0FI&feature=youtu.be
It'll help you in getting started while reading Chapter 2.

If you're interested in requesting the on-site trainings in your organization, send us an email at training@faratasystems.com. 
