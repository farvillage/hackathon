require('dotenv').config()
console.log(process.env.GPT_KEY)
const express = require('express');
  const path = require('path');
  
  const PORT = process.env.PORT || 4001;

  const app = express();
  app.use(express.static(`${__dirname}`));
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
  });
  app.listen(PORT);