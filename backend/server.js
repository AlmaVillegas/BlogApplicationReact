const express = require("express");
const dotenv = require("dotenv") ;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const app = express();
const users = require("./routes/users.js");
const posts = require("./routes/posts.js")
dotenv.config();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//db configuration
const dbURI = process.env.DB_HOST;
mongoose
.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true })
.then(() => console.log("Mongo Connection successful"))
.catch(err => console.log(err));

mongoose.set("useFindAndModify", false);
mongoose.Promise= global.Promise;

app.use(passport.initialize());
require("./middleware/passport");
app.use("/api/users/", users);
app.use("/api/posts", posts);

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
