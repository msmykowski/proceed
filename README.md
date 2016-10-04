# proceed
A lightweight boilerplate to quickly get a react project up and running.

Getting Started:

```
git clone https://github.com/msmykowski/proceed.git
cd proceed
npm i 
npm run dev 
```

Development:

Run ```npm run dev``` to start the development and test server

By default the development server will listen on port :8080

By default the test server will listen on port :8888

Tasks:

- gulp - runs gulp lint, gulp spec in sequence
- gulp lint - runs eslint
- gulp spec - runs the unit tests in a headless browser from the CLI
- gulp jasmine - starts the jasmine test server (default port is 8888)

** it is good practice to run gulp before commiting

Deploying:

Run ```npm run build``` to compile your static assets.  Your assets will build into the /static directory.

