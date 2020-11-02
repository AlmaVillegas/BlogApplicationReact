# MERN Blogging Application

Technologies Used:
- FrontEnd: React Hooks, React-Bootstrap, Redux-thunk, Axios
- Database: MongoDB, mongoose
- BackEnd: Node.js, Express.js, Passport.js, JsonWebToken

# Configuration
For [configuring the environment variables]there are two common approaches:
- Creating a .env file in your root directory with KEY=VALUE pairs assigned and fetching those keys in server.js file using dotenv()
```
# Server.js
require('dotenv').config();
const mongoURI = process.env.MONGO_URI
``` 
- Export a config file with {KEY:VALUE} pairs. Import the file and use the required variables.
```
# Sample config file
module.exports = {
  MONGO_URI: 'mongodb://dbuser:dbpass@host:port/dbname'
}

# Server.js
const mongoURI = require(pathToConfig).MONGO_URI;
```

# Quick Start
```
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev
```