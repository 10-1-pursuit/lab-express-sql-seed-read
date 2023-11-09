// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
// Gives us access to our environment variables in .env
require("dotenv").config();// imported the environment variables so we can listen on port
const PORT = process.env.PORT;// server has to be listening to a port online

// LISTEN when the front end is making a request to the backend the server is listening
// it listens on the port // listens for requests on the api
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
// server.js = entry point into the app
// when the front end makes a call to the back end its going to server.js
// because we have our app that we set up in app.js