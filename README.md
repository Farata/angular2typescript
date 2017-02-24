This is a repository for code samples for the book by Yakov Fain and Anton Moiseev <a href="https://www.amazon.com/Angular-Development-TypeScript-Yakov-Fain/dp/1617293121">Angular 2 Development with TypeScript</a>. These code examples are free to use under the <a href="https://tldrlegal.com/license/mit-license">MIT</a> license.

All code samples were upgraded to Angular 2.0 or later releases. 

**Reporting errors:**  If you'll run into a bug in the code, please open an issue here. If you want to report errors or typos in the book text, please report it at the <a href="https://forums.manning.com/forums/angular-2-development-with-typescript">book's forum</a> in the Errata section.

To start a new SystemJS-based project use the seed project from chapter 2. To create a new Webpack-based project use the seed angular2-webpack-seed from chapter 10. 

The video with a code review of a sample online auction application that we gradually develop in the book is located at https://youtu.be/I809tajbVk4.

Watch the video from one of our recent online trainings:
https://www.youtube.com/watch?v=47Gn-jgb0FI&feature=youtu.be
It'll help you in getting started while reading Chapter 2.

To request [on-site training](https://yakovfain.com/2016/10/01/angular-2-training-for-your-organization/) in your organization send us an email at training@faratasystems.com. 


*The Angular CLI version of the projects*

After the book was published we've created additional versions of book samples using Angular-CLI generated projects (see this video https://www.youtube.com/watch?time_continue=1&v=VKQEN7IyanU). These code samples are located in the directory extras. 

The extras directory has several subdirectories. Each of those is an Angular CLI project with several sample applications. Each of these applications has a bootstrap file with the name that starts with main (see the src directory). 

NOTE: Starting from Angular CLI 1.0 Beta 30, the command to install it looks as follows: 
npm install -g @angular/cli

To upgrade existing projects to the latest Angluar CLI version read this blog: https://yakovfain.com/2017/02/05/upgrading-to-the-latest-angular-cli

To run any of these applications, change into the required directory and run npm install. Then modify the property main in the angular-cli.json to point at the bootstrap file you want to run.

After that, run ng serve and open your browser at localhost:4200.

Code samples located in the folders http-node-samples and auction require two separate terminal windows: one for running the Node server and another - to bundle and deploy the client. In the client dir: npm run build. In the server dir: npm run devRestAngular (in auction/server it's npm run startServer). Then open your browser at localhost:8000.

The folder test-weather contains the sample app from chapter 9. It requires Angular CLI 1.0.0-beta.32.3 or above. To run the tests, ng test.