const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body><h1>hello</h1></body></html>");
  res.end();
});

server.listen(3000, (req, res) => {
  console.log("SERVER Started @3000");
});
