# Production

Front end: https://katiekeel.github.io/quantified-self/  
Back end: https://qs-express-api.herokuapp.com/

# Contributing

Clone the [backend app](https://github.com/katiekeel/qs-express-api) into its own directory:

`$ git clone git@github.com:katiekeel/qs-express-api.git`,

and `$ cd` into it, then run the following to start the server:  

`$ npm install`  (you must have [Node.js](https://nodejs.org/en/) installed locally)

`$ npm start`

--

Then, in a separate directory, clone the `-local` branch of the frontend app (i.e. this repo):

`$ git clone -b local git@github.com:katiekeel/quantified-self.git`

`$ cd` into the frontend directory and run `$ npm start`.

-- -- -- --
*Be sure to clone into the "local" branch as shown above. Cloning into the master branch will give you the API endpoints for the production app and the calls won't work correctly. Also, `$ npm start` will fail because the script is different for Heroku than it is for your local machine.*  
-- -- -- --

Navigate to http://localhost:8080 to view the application in action! If you'd like to see your changes as you save without refreshing, use http://localhost:8080/webpack-dev-server. **Note:** If you use webpack-dev-server and click links within the app, your actual URL will not change, so when you refresh the page after clicking it will return you to the previous page.

PRs always welcome! We could use help on:  
- Test coverage for the backend
- Testing the frontend
- Refactoring

If you have any setup errors or just need help, feel free to submit an issue and we'll get to you ASAP.
