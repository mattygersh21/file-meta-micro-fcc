const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.use('/api', require('./routes/postfiles'));

// listen for requests :)
const listener = app.listen(process.env.PORT || 5000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
