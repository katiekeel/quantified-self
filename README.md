# Production

Front end: https://katiekeel.github.io/quantified-self/  
Back end: https://qs-express-api.herokuapp.com/

# Contributing

Node backend is [here](https://github.com/katiekeel/qs-express-api), Rails backend is [here](https://github.com/case-eee/quantified-self-api). Use whichever one you like. 

Clone either of them into their own directory and run the following for the Express server:  

`$ npm install`  
`$ npm start`

or just `$ rails s` for the Rails backend app.

Then, in a separate directory, clone into the frontend app (i.e. this repo):

`$ git clone -b local git@github.com:katiekeel/quantified-self.git`

Be sure to clone into the "local" branch as shown above. Cloning into the master branch will give you the API endpoints for the production app and the calls won't work correctly. Also, `$ npm start` will fail because the script is different for Heroku than it is for your local machine.  

Then, in the frontend directory:

`$ npm install`  
`$ npm run build`  
`$ npm start`  

Navigate to http://localhost:8080 to view the application in action! If you'd like to see your changes as you save without refreshing, use http://localhost:8080/webpack-dev-server.

PRs always welcome! We could use help on:  
- Test coverage for the backend
- Testing the frontend
- Refactoring

If you have any setup errors or just need help, feel free to submit an issue and we'll get to you ASAP.
