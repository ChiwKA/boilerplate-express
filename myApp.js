let express = require('express');
let app = express();
require('dotenv').config();

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + '/views/index.html')
// })

app.get('/json', (req, res) => {
  console.log(process.env.MESSAGE_STYLE)
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({"message": "HELLO JSON"})
  } else {
    res.json({"message": "Hello json"})
  }
})

app.use('/public', express.static(__dirname + '/public'))






































 module.exports = app;
