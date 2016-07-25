This is a repository for code samples for the upcoming book by Yakov Fain and Anton Moiseev <a href="https://manning.com/books/angular-2-development-with-typescript">Angular 2 Development with TypeScript</a>. 

All examples were upgraded to Angular 2 RC.4.  The video with a high-level code review of a sample Online Auction application that we gradually develop in the book is located at https://youtu.be/I809tajbVk4.

In the latest version of the code we use the new new new router 3.0 Beta 2. If you want the router's sample that use older version of the router see the dir chapter3_router_v2.
Any folder that has _old_ in the name has code samples described in the MEAP V6.

Also, the Forms API is being changed. Code samples that described in MEAP v6 are located in the dir chapter7_old_form_api. The code samples with the latest Forms API are in chapter7.

Watch the video from one of our recent online trainings:
https://www.youtube.com/watch?v=47Gn-jgb0FI&feature=youtu.be
It'll help you in getting started while reading Chapter 2.

With the recent release of TypeScript 2.0 Beta, there is no need to use the Typings tool for downloading *.d.ts files. We're starting updating the code example to use @types and install the *.d.ts files with npm, e.g. 
npm i @types/es6-shim --save

