const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");

  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.write(
      "<a href=http://localhost:3000/about><button>click here</button></a>",
    );
    res.end("<h1>Welcome to My Web Server</h1>");
  } else if (req.url === "/about" && req.method === "GET") {
    res.statusCode = 200;
    res.end("<h1>About Page</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 Not Found</h1>");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
