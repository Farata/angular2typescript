The extras directory has several subdirectories. Each of those is an Angular CLI project with several sample applications. Each of these applications has a bootstrap file with the name that starts with main (see the src directory). 

To run any of these applications, change into the required directory and run npm install. Then modify the property main in the angular-cli.json to point at the bootstrap file you want to run.

After that, run ng serve and open your browser at localhost:4200.