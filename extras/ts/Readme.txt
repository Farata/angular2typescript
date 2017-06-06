I was creating these code samples assuming that Node.js is installed on the computer.
If you don't have it, installed any version from nodejs.org


To run any of the code samples, download the ts directory, cd into it, and run npm install.
This will install the local version of the tsc compiler.

Then compile all the code samples into the dist dir by running the following command:
npm run tsc

You'll see one compilation error, that I don't fix for demo purposes. Ignore it.

The tile tsconfig.json instructs tsc to run in the watch mode. After the compilation either CTRL-C it,
or open another command window to run code samples from there.

To run any code sample located in the dist dir (e.g. fatarrow.js), run the following command from the root dir:
node dist/fatarrow.js

To run a sample Angular/TypeScript app that uses jQueryUI do the following:
  npm install live-server -g 
  cd src/hello-world-ts-jquery 
  live-server



