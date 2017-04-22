This is a repository for code samples for the book by Yakov Fain and Anton Moiseev <a href="https://www.amazon.com/Angular-Development-TypeScript-Yakov-Fain/dp/1617293121">Angular 2 Development with TypeScript</a>. 

Besides the original code samples (they work with Angular 2.4) this repo has the folder extras with their Angular CLI version for both Angular 2 and Angular 4.

**Reporting errors:**  If you'll run into a bug in the code, please open an issue here. If you want to report errors or typos in the book text, please report it at the <a href="https://forums.manning.com/forums/angular-2-development-with-typescript">book's forum</a> in the Errata section. We started reading all submissions and created an Errata page with corrections here: http://bit.ly/2nrJXLe. 

The video with a code review of a sample online auction application that we gradually develop in the book is located at https://youtu.be/I809tajbVk4.

Watch the video from one of our recent online trainings:
https://www.youtube.com/watch?v=47Gn-jgb0FI&feature=youtu.be
It'll help you in getting started while reading Chapter 2.

To request [on-site training](https://yakovfain.com/2016/10/01/angular-2-training-for-your-organization/) in your organization send us an email at training@faratasystems.com. 


*The Angular CLI version of the projects*

After the book was published we've created additional versions of book samples using Angular-CLI generated projects (see this video https://www.youtube.com/watch?time_continue=1&v=VKQEN7IyanU). These code samples are located in the directory extras. 

The extras directory has several subdirectories. Each of those is an Angular CLI project with several sample applications. Each of these applications has a bootstrap file with the name that starts with main (see the src directory). 

To run any of these applications, change into the required directory and run npm install. The file .angular-cli.json may configure one or more apps. If there only one app configured per project (default),  modify the property main in the file  .angular-cli.json to point at the bootstrap file you want to run.
After that, run ng serve and open your browser at localhost:4200.

If several apps are configured in .angular-cli.json project (as in the project inter-component), run a specific app by name. For example, to run and open in the browser main-mediator-parent.ts, enter the following command: 

ng serve --app mediator1 -o

Code samples located in the folders http-node-samples and auction require two separate terminal windows: one for running the Node server and another - to bundle and deploy the client. In the client dir: npm run build. In the server dir: npm run devRestAngular (in auction/server it's npm run startServer). Then open your browser at localhost:8000.

The folder test-weather contains the sample app from chapter 9. To run the tests, ng test.

*The Angular 4 version of the code samples*

The Angular 4 version of code samples were built with  Angular CLI. They are located in the directory extras/Angular_4.
