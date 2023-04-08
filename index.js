// const http = require("http");
// const fs = require("fs");
// require('dotenv').config()

// const PORT = process.env.PORT || 5001

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/html" });
//   fs.createReadStream(__dirname+"/public").pipe(res);
// });

// server.listen(PORT, () => {
// console.log(process.env.GPT_KEY)
//   console.log(`Server :${PORT}`);
// });
const express = require('express');
  const path = require('path');
  
  const PORT = process.env.PORT || 4001;

  const app = express();
  app.use(express.static(`${__dirname}/public`));
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
  });
  app.listen(PORT);