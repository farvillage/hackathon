const http = require("http");
const fs = require("fs");
require('dotenv').config()

const PORT = process.env.PORT || 5001

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.createReadStream("./index.html").pipe(res);
});

server.listen(PORT, () => {
console.log(process.env.GPT_KEY)
  console.log(`Server :${PORT}`);
});
