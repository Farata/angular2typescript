The extras directory has several subdirectories. Each of those is an Angular CLI project with several sample applications. Each of these applications has a bootstrap file with the name that starts with main (see the src directory). 

NOTE: Starting from Angular CLI 1.0 Beta 30, the command to install it looks as follows: npm install -g @angular/cli
To upgrade the exising projects read this blog: https://yakovfain.com/2017/02/05/upgrading-to-the-latest-angular-cli/

To run any of these applications, change into the required directory and run npm install. Then modify the property main in the angular-cli.json to point at the bootstrap file you want to run.

After that, run ng serve and open your browser at localhost:4200.

Code samples located in the folders http-node-samples and auction require two separate terminal windows: one for running the Node server and another - to bundle and deploy the client. In the client dir: npm run build. In the server dir: npm run devRestAngular (in auction/server it's npm run startServer). Then open your browser at localhost:8000.
